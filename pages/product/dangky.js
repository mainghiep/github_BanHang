app.controller('dangkyCrtl',function($scope,$http){
    $scope.user = {
        taikhoan:'',
        matkhau:'',
    }
    $scope.checkloi = true
    $scope.thongbao =''
    $scope.oneclickdangky = function(){
        $scope.thongbao ='';
        $scope.baoloi = true;
        if($scope.user.taikhoan ===''){
            $scope.checkloi = false;
            $scope.thongbao ='Bạn chưa nhập tài khoản';
            return
        }
        if($scope.user.taikhoan.length < 8){
            $scope.checkloi = false;
            $scope.thongbao ='Tài khoản bạn phải tối thiểu 8 ký tự';
            return
        }
        if(!isNaN($scope.user.taikhoan)){
            $scope.checkloi = false;
            $scope.thongbao ='tài khoản bạn phải là chữ';
            return
        }
        if($scope.user.matkhau ===''){
            $scope.checkloi = false;
            $scope.thongbao ='Bạn chưa nhập mật Khẩu';
            return
        }
        if($scope.user.matkhau.length < 8){
            $scope.checkloi = false;
            $scope.thongbao ='mật Khẩu bạn phải tối thiểu 8 ký tự';
            return
        } 
        $http({
            method:'post',
            url:'http://localhost:3000/user',
            data:$scope.user
        }).then(function(ys){
            alert('Tạo Thành Công @@')
        })
    }
})