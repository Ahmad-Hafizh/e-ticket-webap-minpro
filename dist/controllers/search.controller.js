"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchController = void 0;
const prisma_1 = require("../config/prisma");
const responseHandler_1 = __importDefault(require("../utils/responseHandler"));
class SearchController {
    //Behvaiour = API can be called following the above query. Can be mixed and matched.
    //Category query can be called with multiple value, e.g. localhost/event?cat=music,theatre => to filter event in the music and theatre category
    filterEvent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { cat, //cat name
                eo, //userid
                startdate, enddate, city, //city id
                country, //country id
                pricemin, pricemax, sortby, orderby, keyword, page, } = req.query;
                const url = req.url;
                console.log(url);
                console.log("Ini page", page);
                console.log("ini organizer id:", eo);
                //PR CEK QUERY
                let cityIds;
                if (city) {
                    const cityNames = city
                        .split(",")
                        .map((name) => name.trim());
                    const cityData = yield prisma_1.prisma.location_city.findMany({
                        where: {
                            city_name: { in: cityNames },
                        },
                    });
                    cityIds = cityData.map((city) => city.location_city_id);
                }
                const categoriesList = cat
                    ? cat.split(",").map((name) => name.trim())
                    : undefined;
                console.log("Ini categoriesList", categoriesList);
                let countryIds;
                if (countryIds) {
                    const countryNames = country
                        .split(",")
                        .map((name) => name.trim());
                    const countryData = yield prisma_1.prisma.location_country.findMany({
                        where: {
                            country_name: { in: countryNames },
                        },
                    });
                    countryIds = countryData.map((country) => country.location_country_id);
                }
                const pageNumber = parseInt(page);
                const pageSize = 6;
                const eoId = eo ? parseInt(eo) : undefined;
                const result = yield prisma_1.prisma.event.findMany({
                    skip: (pageNumber - 1) * pageSize,
                    take: pageSize,
                    where: {
                        event_category: {
                            some: {
                                category_name: categoriesList
                                    ? { in: categoriesList }
                                    : undefined,
                            },
                        },
                        title: {
                            contains: keyword || undefined,
                            mode: "insensitive",
                        },
                        organizer_id: eoId ? eoId : undefined,
                        ticket_types: {
                            every: {
                                price: {
                                    gte: parseInt(pricemin) || undefined, //query by price min
                                    lte: parseInt(pricemax) || undefined, //query by price max
                                },
                            },
                        },
                        event_location: {
                            location_city_id: cityIds ? { in: cityIds } : undefined, //query by city
                            location_country_id: countryIds ? { in: countryIds } : undefined, //query by country
                        },
                        AND: [
                            startdate
                                ? {
                                    startDate: {
                                        gte: new Date(startdate) || undefined,
                                    },
                                }
                                : {},
                            enddate
                                ? {
                                    endDate: {
                                        lte: new Date(enddate) || undefined,
                                    },
                                }
                                : {},
                        ],
                    },
                    include: {
                        event_category: true,
                        event_location: true,
                        ticket_types: true,
                        review: true,
                        organizer: true,
                    },
                    orderBy: {
                        [sortby]: orderby || undefined, //Akses properti sortby (isinya nama properti).
                    },
                });
                //Filter price range
                const priceRange = result.map((value) => {
                    const minPrice = value.ticket_types.length
                        ? Math.min(...value.ticket_types.map((value) => value.price))
                        : null;
                    return Object.assign(Object.assign({}, value), { min_price: minPrice });
                });
                const filteredEventFinal = priceRange.filter((value) => {
                    if (pricemin && value.min_price < parseInt(pricemin)) {
                        return false;
                    }
                    else if (pricemax && value.min_price > parseInt(pricemax)) {
                        return false;
                    }
                    return true;
                });
                //Count how many items sesuai filter di db
                const totalEvents = yield prisma_1.prisma.event.count({
                    where: {
                        event_category: {
                            some: {
                                category_name: categoriesList
                                    ? { in: categoriesList }
                                    : undefined,
                            },
                        },
                        title: {
                            contains: keyword || undefined,
                        },
                        organizer_id: parseInt(eo) || undefined, // query by user
                        ticket_types: {
                            every: {
                                price: {
                                    gte: parseInt(pricemin) || undefined, // query by price min
                                    lte: parseInt(pricemax) || undefined, // query by price max
                                },
                            },
                        },
                        event_location: {
                            location_city_id: cityIds ? { in: cityIds } : undefined, // query by city
                            location_country_id: countryIds ? { in: countryIds } : undefined, // query by country
                        },
                        AND: [
                            startdate
                                ? {
                                    startDate: {
                                        gte: new Date(startdate) || undefined,
                                    },
                                }
                                : {},
                            enddate
                                ? {
                                    endDate: {
                                        lte: new Date(enddate) || undefined,
                                    },
                                }
                                : {},
                        ],
                    },
                });
                const totalPages = Math.ceil(totalEvents / pageSize);
                const payload = {
                    events: filteredEventFinal,
                    currentPage: pageNumber,
                    totalPages: totalPages,
                };
                return responseHandler_1.default.success(res, "Filter Success", 200, payload);
            }
            catch (error) {
                console.log(error);
                return responseHandler_1.default.error(res, "Filter Error", 500, error);
            }
        });
    }
}
exports.SearchController = SearchController;
