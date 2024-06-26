app.controller('quanlysanphamCrtl', function ($http, $scope) {
    $scope.listsanpham = [];
    $http({
        method: 'GET',
        url: 'http://localhost:3000/sanpham'
    }).then(function (response) {
        $scope.listsanpham = response.data;

    })
    $scope.onedelete = function(id){
        $http({
            method:'DELETE',
            url:'http://localhost:3000/sanpham/'+ id
        }).then(function(response){
            alert("Xóa Thành Công")
        })
    }
})