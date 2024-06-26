app.controller('suadanhmucCtrl',function($scope,$http,$routeParams){
    $scope.danhmuc={
        id:'',
        ten:''
    }
    $scope.thongbao='';
    $scope.baoloi =true
    $http({
        method:'GET',
        url:'http://localhost:3000/danhmuc/'+ $routeParams.id
    }).then(function(response){
        $scope.danhmuc=response.data
    })
    $scope.oneclicksua = function(){
        $scope.thongbao='';
        $scope.baoloi =true
        if($scope.danhmuc.ten ===''){
            $scope.baoloi =false;
            $scope.thongbao='Bạn Chưa Nhập Tên';
            return
        }
        $http({
            method:'PUT',
            url:'http://localhost:3000/danhmuc/'+ $routeParams.id,
            data:$scope.danhmuc
        }).then(function(ys){
            alert('Sửa Thành Công @@')
        })
    }
})