(function () {
    "use strict";

    angular
        .module("common.services") //reference to common.services module
        .factory("productResource", ["$resource", productResource]); //call factory() of that module to register the productResource service

    function productResource($resource) {
        return $resource("/api/products/:productId")
    }
}());