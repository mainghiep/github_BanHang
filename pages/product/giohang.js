
app.controller('giohangCrtl', function ($scope, $http, $routeParams,$rootScope) {
    $scope.giohang = {
        id: '',
        ten: '',
        anh: '',
        soluong:'',
        giaBan:'',
        thanhtien:''
    }
    
    $http({
        method: 'get',
        url: 'http://localhost:3000/giohang',
    }).then(function (ys) {
        $scope.giohang = ys.data
        $rootScope.tongtien = calculateTotalAmount($scope.giohang);
    })
    
   
    $scope.oneclickdelete = function(id){
        $http({
            method: 'delete',
            url: 'http://localhost:3000/giohang/'+id,
        }).then(function (ys) {
            alert("Xóa Thành Công")
            if($scope.stt.so >= 1 ){
                $rootScope.stt.so--
                
                $http({
                    method: 'Put',
                    url: 'http://localhost:3000/stt',
                    data: $rootScope.stt
                }).then(function (ys) {
                    alert('Đã Thêm Thành Công Vào Giỏ Hàng')
                    
                })
            }
        })
    }
    function calculateTotalAmount(giohang) {
        var totalAmount = 0;
        for (var i = 0; i < giohang.length; i++) {
            var product = giohang[i];
            totalAmount += product.soluong * product.giaBan;
        }
        return totalAmount;
    }
})