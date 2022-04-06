const mongoose = require('mongoose');

/**
 * @typedef Geocode
 * @property {string} _id
 * @property {string} formattedAddress
 * @property {number} latitude
 * @property {number} longitude
 * @property {string} country
 * @property {string} countryCode
 * @property {string} city
 * @property {string} zipcode
 * @property {string} streetName
 * @property {string} streetNumber
 * @property {Object} administrativeLevels
 *  @property {string} level1long
 *  @property {string} level1short
 *  @property {string} level2long
 *  @property {string} level2short
 * @property {string} provider
 */

const Schema = mongoose.Schema;
const GeocodeSchema = new Schema(
  {
    formattedAddress: {
      type: String,
    },
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
    country: {
      type: String,
    },
    countryCode: {
      type: String,
    },
    city: {
      type: String,
    },
    zipcode: {
      type: String,
    },
    streetName: {
      type: String,
    },
    streetNumber: {
      type: String,
    },
    administrativeLevels: {
      type: Object,
    },
    provider: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Geocode = mongoose.model('Geocode', GeocodeSchema);
module.exports = Geocode;
