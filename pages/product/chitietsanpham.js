
app.controller('chitietsanphamCtrl', function ($scope, $http, $routeParams, $rootScope) {
    $scope.stt={
        so : 0
    }
    $rootScope.sos =1;
    $rootScope.cartNumber = 1;
    $scope.oneclicktang = function () {
        $rootScope.cartNumber += 1
    }
    $scope.oneclickgiam = function () {
        if ($rootScope.cartNumber > 1) {
            $rootScope.cartNumber -= 1
            
        }
    }
    $scope.sanpham = {
        id: '',
        ten: '',
        anh: '',
        giaBan: '',
        giaNiemYet: '',
        tenDanhMuc: '',
        idDanhMuc: ''
    }
    $http({
        method: 'GET',
        url: 'http://localhost:3000/sanpham/' + $routeParams.id
    }).then(function (response) {
        $scope.sanpham = response.data;
    })
    $scope.giohang = {
        id: '',
        ten: '',
        anh: '',
        soluong:'',
        giaBan: '',
        thanhtien:''
    }
    $scope.oneclickthemgiohang = function () {
        $http({
            method: 'GET',
            url: 'http://localhost:3000/sanpham/' + $routeParams.id
        }).then(function (response) {
            $scope.giohang.id = $scope.sanpham.id,
            $scope.giohang.ten = $scope.sanpham.ten,
            $scope.giohang.anh = $scope.sanpham.anh,
            $scope.giohang.soluong = $rootScope.cartNumber,
            $scope.giohang.giaBan = $scope.sanpham.giaBan,
            $scope.giohang.thanhtien = $rootScope.cartNumber * $scope.sanpham.giaBan
            console.log($scope.giohang)
            
            $http({
                method: 'post',
                url: 'http://localhost:3000/giohang',
                data: $scope.giohang
            }).then(function (ys) {
                alert('Đã Thêm Thành Công Vào Giỏ Hàng')
                    $rootScope.stt.so =+1
                    
                $http({
                    method: 'Put',
                    url: 'http://localhost:3000/stt',
                    data: $scope.stt
                }).then(function (ys) {
                    
                    
                })
            })
            
        });
    }

})