app.controller('chinhsuasanphamCrtl', function ($http, $scope, $routeParams) {
    $scope.sanpham = {
        id: '',
        ten: '',
        anh: '',
        giaBan: '',
        giaNiemYet: '',
        tenDanhMuc: '',
        idDanhMuc: ''
    }
    $scope.formStatus = true
    $scope.thongbao = '';
    $http({
        method: 'GET',
        url: 'http://localhost:3000/sanpham/' + $routeParams.id
    }).then(function (response) {
        // Xử lý dữ liệu sau khi call api thành công
        $scope.sanpham = response.data;

    })
    $scope.oneclicksua = function () {

        $scope.formStatus = true
        $scope.thongbao = '';
        if ($scope.sanpham.ten === '') {
            $scope.formStatus = false;
            $scope.thongbao = 'Tên Không Được Bỏ Trống';
            return;
        }
        if ($scope.sanpham.giaBan === '') {
            $scope.formStatus = false;
            $scope.thongbao = 'Giá Bán Không Được Bỏ Trống';
            return;
        }
        if (isNaN($scope.sanpham.giaBan)) {
            $scope.formStatus = false;
            $scope.thongbao = 'Giá Bán Phải là số';
            return;
        }
        if (Number($scope.sanpham.giaBan) < 800000) {
            $scope.formStatus = false;
            $scope.thongbao = 'Giá Bán Lớn hơn 800.000đ';
            return;
        }
        if ($scope.sanpham.giaNiemYet === '') {
            $scope.formStatus = false;
            $scope.thongbao = 'Giá Niêm Yết Không Được Bỏ Trống';
            return;
        }
        if (isNaN($scope.sanpham.giaNiemYet)) {
            $scope.formStatus = false;
            $scope.thongbao = 'Giá Niêm Yết Phải là số';
            return;
        }
        if (Number($scope.sanpham.giaNiemYet) < 800000) {
            $scope.formStatus = false;
            $scope.thongbao = 'Giá Niêm Yết Lớn hơn 800.000đ';
            return;
        }
        if ($scope.sanpham.anh === '') {
            $scope.formStatus = false;
            $scope.thongbao = 'Ảnh Không Được Bỏ Trống';
            return;
        }
        if ($scope.sanpham.tenDanhMuc === '') {
            $scope.formStatus = false;
            $scope.thongbao = 'Tên Danh Mục Không Được Bỏ Trống';
            return;
        }
        if ($scope.sanpham.idDanhMuc === '') {
            $scope.formStatus = false;
            $scope.thongbao = 'ID Danh Mục Không Được Bỏ Trống';
            return;
        }
        $http({
            method: 'PUT',
            url: 'http://localhost:3000/sanpham/' + $routeParams.id,
            data: $scope.sanpham
        }).then(function (response) {
            alert('Sửa Thành Công')
            
        })

    }
})