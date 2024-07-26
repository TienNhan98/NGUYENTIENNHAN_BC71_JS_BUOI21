var DSSV = [];

var data = localStorage.getItem("JSON_DSSV");
var fixJSON = JSON.parse(data);
for (index = 0; index < fixJSON.length; index++) {
  var data = fixJSON[index];

  var sv = new sinhVien(
    data.ma,
    data.ten,
    data.email,
    data.pass,
    data.diemToan,
    data.diemLy,
    data.diemHoa
  );
  DSSV.push(sv);
}
render();

function render() {
  var sinhVienHTML = "";
  for (var index = 0; index < DSSV.length; index++) {
    var sv = DSSV[index];
    var trString = `<tr>
                        <td>${sv.ma}</td>
                        <td>${sv.ten}</td>
                        <td>${sv.email}</td>
                        <td>${sv.tinhDTB()}</td>
                        <td>  
                        <button type="button" class="btn btn-outline-danger "onclick="xoaSV('${
                          sv.ma
                        }')">Xóa</button>
                        <button type="button" class="btn btn-outline-warning" onclick="suaSV('${
                          sv.ma
                        }')">Sửa</button>
                        </td>
                    </tr>`;
    sinhVienHTML += trString;
  }
  document.getElementById("tbodySinhVien").innerHTML = sinhVienHTML;
}

function themSV() {
  var sv = info();
  DSSV.push(sv);
  var JSON_DSSV = JSON.stringify(DSSV);
  localStorage.setItem("JSON_DSSV", JSON_DSSV);
  render();
}

function xoaSV(maSV) {
  var viTri = DSSV.findIndex(function (itemSV) {
    return itemSV.ma == maSV;
  });
  if (viTri != -1) {
    DSSV.splice(viTri, 1);
    var JSON_DSSV = JSON.stringify(DSSV);
    localStorage.setItem("JSON_DSSV", JSON_DSSV);
    render();
  }
}

function suaSV(maSV) {
  var viTri = DSSV.findIndex(function (itemSV) {
    return itemSV.ma == maSV;
  });
  if (viTri != -1) {
    var sv = DSSV[viTri];
    document.getElementById("txtMaSV").value = sv.ma;
    document.getElementById("txtTenSV").value = sv.ten;
    document.getElementById("txtEmail").value = sv.email;
    document.getElementById("txtPass").value = sv.pass;
    document.getElementById("txtDiemToan").value = sv.diemToan;
    document.getElementById("txtDiemLy").value = sv.diemLy;
    document.getElementById("txtDiemHoa").value = sv.diemHoa;
    document.getElementById("txtMaSV").setAttribute("readonly", true);
  }
}

function capNhatSV() {
  var svCapNhat = info();
  var viTri = DSSV.findIndex(function (itemSV) {
    return itemSV.ma == svCapNhat.ma;
  });
  if (viTri != -1) {
    DSSV[viTri] = svCapNhat;
    var JSON_DSSV = JSON.stringify(DSSV);
    localStorage.setItem("JSON_DSSV", JSON_DSSV);
    render();
  }
}
