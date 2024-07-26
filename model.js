function sinhVien(ma, ten, email, pass, diemToan, diemLy, diemHoa) {
  this.ma = ma;
  this.ten = ten;
  this.email = email;
  this.pass = pass;
  this.diemToan = diemToan;
  this.diemLy = diemLy;
  this.diemHoa = diemHoa;
  this.tinhDTB = function () {
    return (this.diemToan + this.diemLy + this.diemHoa) / 3;
  };
}
