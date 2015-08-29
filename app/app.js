(function () {
    "use strict"; //to catch common errors
    var app = angular.module("productManagement", ["common.services", "ui.router", "ui.mask", "ui.bootstrap", "ngMessages", "productResourceMock"]);
    /* ^^this line on its own is global, until wrapped in this IIFE pattern, now in another function to be local, self-executing; you can't put declarations within parentheses, so wrapped in parentheses because it is a function expression; */

    app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise("/");

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "app/welcomeView.html"
            })
            // Products
            .state("productList", {
                url: "/products",
                templateUrl: "app/products/productListView.html",
                controller: "ProductListCtrl as vm"
            })
            .state("productEdit", {
                abstract: true,
                url: "/products/edit/:productId",
                templateUrl: "app/products/productEditView.html",
                controller: "ProductEditCtrl as vm",
                resolve: {
                    productResource: "productResource",

                    product: function (productResource, $stateParams) {
                        var productId = $stateParams.productId;
                        return productResource.get({
                            productId: productId
                        }).$promise;
                    }
                }
            })
            .state("productEdit.info", {
                url: "/info",
                templateUrl: "app/products/productEditInfoView.html"
            })
            .state("productEdit.price", {
                url: "/price",
                templateUrl: "app/products/productEditPriceView.html"
            })
            .state("productEdit.tags", {
                url: "/tags",
                templateUrl: "app/products/productEditTagsView.html"
            })
            .state("productDetail", {
                url: "/products/:productId",
                templateUrl: "app/products/productDetailView.html",
                controller: "ProductDetailCtrl as vm",
                resolve: {
                    productResource: "productResource",

                    product: function (productResource, $stateParams) {
                        var productId = $stateParams.productId;
                        return productResource.get({
                            productId: productId
                        }).$promise;
                    }
                }
            })
    }]);
}());