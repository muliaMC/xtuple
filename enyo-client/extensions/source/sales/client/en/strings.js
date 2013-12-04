/*jshint node:true, indent:2, curly:false, eqeqeq:true, immed:true,
latedef:true, newcap:true, noarg:true, regexp:true, undef:true,
strict:true, trailing:true, white:true */
/*global XT:true */

(function () {
  "use strict";

  var lang = XT.stringsFor("en_US", {
    "_acceptsBackOrders": "Accepts Back Orders",
    "_acceptsPartialShipments": "Accepts Partial Shipments",
    "_allowASAPShipSchedules": "Allow ASAP Schedule Dates",
    "_allowDiscounts": "Allow Price Discounts",
    "_allowFreeFormShiptos": "Allow Free Form Ship-Tos",
    "_authorizedCredit": "Authorized Credit",
    "_autoAllocateCreditMemos": "Allocate Credit Memos to New Sales Order on Save",
    "_autoSelectForBilling": "Check 'Select for Billing' option on Ship Order",
    "_bookings": "Bookings",
    "_convert": "Convert",
    "_creditControl": "Credit Control",
    "_creditMemo": "Credit Memo",
    "_current": "Current",
    "_currentDate": "Current Date",
    "_customerDefaults": "Customer Defaults",
    "_customerTypes": "Customer Types",
    "_cutOffDay": "Cutoff Day",
    "_dateControl": "Date Control",
    "_disableSalesOrderPriceOverride": "Disallow Override of Sale Price on Sales Order",
    "_doNotUpdate": "Do Not Update",
    "_enableSOShipping": "Enable Shipping Interface from Sales Order screen",
    "_firmSalesOrdersWhenAddedToPackingList": "Firm Sales Orders when added to Packing List Batch",
    "_fiveYears": "Five Years",
    "_freightPricing": "Freight Pricing",
    "_hideSOMiscCharge": "Hide Misc. Charge on Sales Order screen",
    "_ignoreIfDiscounted": "Ignore if Discounted",
    "_includePackageWeight": "Include Package Weight in Freight Calculation",
    "_invoice": "Invoice",
    "_invoiceDateSource": "Invoice Date Source",
    "_maintainSalesEmailProfiles": "Maintain Sales Email Profiles",
    "_postCustomerChanges": "Post Customer Changes",
    "_postSalesOrderChanges": "Post Sales Order Changes",
    "_priceControl": "Price Control",
    "_priceEffectiveDate": "Price Effective Date",
    "_pricing": "Pricing",
    "_pricingOnLineItemEdits": "Pricing on Line Item edits",
    "_printOnSave": "Print on Save",
    "_process": "Process",
    "_processCreditCards": "Process Credit Cards",
    "_prompt": "Prompt",
    "_restrictCreditMemos": "Restrict Credit Memos to Items on their Apply-to Document",
    "_sales": "Sales",
    "_salesDescription": "Customer and Sales Order Management",
    "_salesHistory": "Sales History",
    "_salesOrder": "Sales Order",
    "_scheduled": "Scheduled",
    "_scheduledDate": "Scheduled Date",
    "_shipControl": "Ship Control",
    "_shipDate": "Ship Date",
    "_showQuotesAfterConverted": "Show Quotes after Conversion to SO",
    "_showSaveAndAddbutton": "Show 'Save and Add to Packing List' Button on Sales Order",
    "_staleAnalysisWarning": "Free trial demo analysis data will not be updated from your live changes.",
    "_termsType": "Terms Type",
    "_thisWeek": "This Week",
    "_thisMonth": "This Month",
    "_thisYear": "This Year",
    "_timeFrame": "Time Frame",
    "_twoYears": "Two Years",
    "_today": "Today",
    "_update": "Update",
    "_useCalculatedFreightPricing": "Use calculated Freight values by default",
    "_usePromiseDates": "Enable Promise Dates",
    "_viewSalesHistory": "View Sales History"
  });

  if (typeof exports !== 'undefined') {
    exports.language = lang;
  }
}());
