app.controller('dangnhapCrtl', function ($scope, $http) {
    $scope.users = {
        taikhoan: '',
        matkhau: '',
    }
    $scope.user = [];
    $scope.checkloi = true
    $scope.thongbao = ''

    $scope.oneclickthem = function () {
        var found = false;
        // if ($scope.user.taikhoan === $scope.users.taikhoan && $scope.user.matkhau === $scope.users.matkhau) {

        //     $scope.checkloi = false;
        //     $scope.thongbao = "Thành công";
        //     console.log('user', $scope.user.taikhoan)
        //     console.log('users', $scope.users.taikhoan)
        // } else {
        //     $scope.checkloi = false;
        //     $scope.thongbao = "Tài khoản hoặc mật khẩu không chính xác.";
        //     console.log('user', $scope.user.taikhoan)
        //     console.log('users', $scope.users.taikhoan)
        // }

        for (var i = 0; i < $scope.user.length; i++) {
            if ($scope.user[i].taikhoan === $scope.users.taikhoan && $scope.user[i].matkhau === $scope.users.matkhau) {
                found = true;
                break;
            }
        }

        if (found) {
            $scope.checkloi = false;
            $scope.thongbao = "Thành công";
            console.log('users', $scope.users.taikhoan);
            console.log('user', $scope.user.taikhoan);
        } else {
            $scope.checkloi = false;
            $scope.thongbao = "Tài khoản hoặc mật khẩu không chính xác.";
            console.log('users', $scope.users.taikhoan);
            console.log('user', $scope.user.taikhoan);
        }
    }

})
