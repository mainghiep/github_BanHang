app.controller('quanlydanhmucCrtl',function($scope,$http,$routeParams){
    $scope.listdanhmuc = []
    $http({
        method:'get',
        url:'http://localhost:3000/danhmuc'
    }).then(function(ys){
        $scope.listdanhmuc = ys.data
    })
    $scope.oneclickxoa = function(id){
        $http({
            method:'DELETE',
            url:'http://localhost:3000/danhmuc/'+id
        }).then(function(ys){
            alert('Xóa Thành Công')
        })
    }
})