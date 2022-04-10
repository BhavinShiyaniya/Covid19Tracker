const URL = "https://covid19.mathdro.id/api";

// var app = angular.module("MyApp", []);

var app = angular.module("MyApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "index.html"
        })
        .when("/coronatracker", {
            templateUrl: "index.html"
        })
        .when("/currencyconverter", {
            templateUrl: "currency.html"
        })
        .otherwise({
            templateUrl: "index.html"
        });
});

app.controller("MyCtrl", ($scope, $http) => {
    // this is controller
    $scope.title = "Stay Home Stay Safe";

    console.log("APP Loaded.");

    // calling api

    $http.get(URL).then(
        (response) => {
            // success
            console.log(response.data);
            $scope.all_data = response.data;
        },
        (error) => {
            // error
            console.log(error);
        });

    // get country data

    $scope.get_c_data = () => {
        let country = $scope.c;
        if (country == "") {
            $scope.c_data = undefined;
            return;
        }

        $http.get(`${URL}/countries/${country}`)
            .then((response) => {
                console.log(response.data);
                $scope.c_data = response.data;
            },
                (error) => {
                    console.log(error);
                });
    };
});