app.controller('themdanhmucCtrl', function ($scope, $http, $routeParams) {
    $scope.danhmuc = {
        id: '',
        ten: ''
    }
    $scope.thongbao ='';
    $scope.baoloi = true;
    $scope.oneclickthem = function(){
        $scope.thongbao ='';
        $scope.baoloi = true;
        if($scope.danhmuc.id ===''){
            $scope.baoloi = false;
            $scope.thongbao ='Chưa Nhập ID';
            return
        }
        if($scope.danhmuc.ten ===''){
            $scope.baoloi = false;
            $scope.thongbao ='Chưa Nhập Tên Danh Mục';
            return
        }
        $http({
            method:'post',
            url:'http://localhost:3000/danhmuc',
            data:$scope.danhmuc
        }).then(function(ys){
            alert('Thêm Thành Công @@')
        })
    }
})