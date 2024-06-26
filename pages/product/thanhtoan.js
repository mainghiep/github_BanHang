app.controller('thanhtoanCrtl', function ($scope, $http, $rootScope) {
    $scope.giohang = {
        id: '',
        ten: '',
        anh: '',
        soluong: '',
        giaBan: '',
        thanhtien: ''
    }

    $http({
        method: 'get',
        url: 'http://localhost:3000/giohang',
    }).then(function (ys) {
        $scope.giohang = ys.data
        $rootScope.tongtien = calculateTotalAmount($scope.giohang);
    })


    $scope.oneclickdelete = function (id) {
        $http({
            method: 'delete',
            url: 'http://localhost:3000/giohang/' + id,
        }).then(function (ys) {
            alert("Xóa Thành Công")
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
    $scope.formStatus = true
    $scope.thongbao = '';
    $scope.oneclickdathang = function() {
        var hoten = document.getElementById("hoten").value;
        var sdt = document.getElementById("sdt").value;
        var diachi = document.getElementById("diachi").value;
        var nguoinhan = document.getElementById("nguoinhan").value;
      
        $scope.formStatus = true;
        $scope.thongbao = '';
      
        if (hoten.trim() === '') {
          $scope.formStatus = false;
          $scope.thongbao = 'Họ Tên Quên Chưa nhập Kìa Bạn';
          return;
        }
      
        if (sdt.trim() === '') {
          $scope.formStatus = false;
          $scope.thongbao = 'Số Điện Thoại Quên Chưa nhập Kìa Bạn';
          return;
        }
      
        if (isNaN(parseInt(sdt))) {
          $scope.formStatus = false;
          $scope.thongbao = 'Số Điện Thoại Phải Là số';
          return;
        }
      
        if (sdt.length !== 10) {
          $scope.formStatus = false;
          $scope.thongbao = 'Số Điện Thoại Phải Là 10 số';
          return;
        }
      
        if (diachi.trim() === '') {
          $scope.formStatus = false;
          $scope.thongbao = 'Địa CHỉ Quên Chưa nhập Kìa Bạn';
          return;
        }
      
        if (nguoinhan.trim() === '') {
          $scope.formStatus = false;
          $scope.thongbao = 'Người Nhận Chưa nhập Kìa Bạn';
          return;
        }
      
        alert('Đặt Hàng Thành Công @@');
      };
})