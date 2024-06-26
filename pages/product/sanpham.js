app.controller('sanphamCrtl', function ($scope, $http) {
    $scope.sanpham = []
    $scope.danhmuc = []
    $http({
        method: 'get',
        url: 'http://localhost:3000/sanpham'
    }).then(function (ys) {
        $scope.sanpham = ys.data
    })
    $http({
        method: 'get',
        url: 'http://localhost:3000/danhmuc'
    }).then(function (ys) {
        $scope.danhmuc = ys.data
    })
    $scope.oneclickMU = function (id) {
        $http({
            method: 'get',
            url: 'http://localhost:3000/sanpham',
            params: {
                idDanhMuc: id
            }
        }).then(function (ys) {
            $scope.sanpham = ys.data
        })
    }
})