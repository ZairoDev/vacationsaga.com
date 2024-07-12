import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({

    userId: {
        type: String,
        required: true,
    },

    propertyType: String,
    placeName: String,
    rentalForm: String,
    numberOfPortions: { type: Number, default: 1 },

    street: String,
    postalCode: String,
    city: String,
    state: String,
    country: String,
    center: {
        type: {
            lat: Number,
            lng: Number,
        },
    },

    portionName: [String],
    portionSize: [Number],
    guests: [Number],
    bedrooms: [Number],
    beds: [Number],
    bathroom: [Number],
    kitchen: [Number],
    childrenAge: [Number],

    basePrice: [Number],
    weekendPrice: [Number],
    monthlyDiscount: [Number],
    currency: String,

    // generalAmenities: {
    //     type: {
    //         tv: Boolean,
    //         wifi: Boolean,
    //         internet: Boolean,
    //         airConditioning: Boolean,
    //         fan: Boolean,
    //         private_entrance: Boolean,
    //         dryer: Boolean,
    //         heater: Boolean,
    //         washing_machine: Boolean,
    //         detergent: Boolean,
    //         cloth_dryer: Boolean,
    //         baby_cots: Boolean,
    //         desk: Boolean,
    //         fridge: Boolean,
    //     },
    // },
    // otherAmenities: {
    //     type: {
    //         wardrobe: Boolean,
    //         cloth_hook: Boolean,
    //         extra_sofa: Boolean,
    //         gas_stove: Boolean,
    //         toilet_paper: Boolean,
    //         free_toiletries: Boolean,
    //         makeup_table: Boolean,
    //         hot_pot: Boolean,
    //         bathroom_heaters: Boolean,
    //         kettle: Boolean,
    //         dishwasher: Boolean,
    //         bbq_grill: Boolean,
    //         toaster: Boolean,
    //         towel: Boolean,
    //         dining_table: Boolean,
    //     },
    // },
    // safeAmenities: {
    //     type: {
    //         fire_siren: Boolean,
    //         fire_extinguisher: Boolean,
    //         antitheft_key: Boolean,
    //         safe_vault: Boolean,
    //     },
    // },

    generalAmenities: {
        type: Map, 
        of: Boolean,
    },
    otherAmenities:{
        type: Map, 
        of: Boolean,
    },
    safeAmenities:{
        type: Map, 
        of: Boolean,
    },

    smoking: String,
    pet: String,
    party: String,
    cooking: String,
    additionalRules: [String],

    reviews: [String],

    propertyCoverFileUrl: String,
    propertyPictureUrls: [String],
    portionCoverFileUrls: [String],
    portionPictureUrls: [[String]],

    night:[Number],
    time:[Number],
    datesPerPortion:[[String]],

    isLive: {
        type: Boolean,
        default: true,
    }
}, { timestamps: true });

export const Property = mongoose.models.listings || mongoose.model("listings", PropertySchema);
