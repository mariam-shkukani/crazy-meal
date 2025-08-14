// Constructor function للوجبات
function Order(mealName, mealPrice, mealImage) {
  this.mealName = mealName;
  this.mealPrice = mealPrice;
  this.mealImage = mealImage;
}

// مصفوفة لتخزين الطلبات
let orders = [];

// جلب الجدول من الصفحة
const table = document.getElementById("ordersTable");

// التعامل مع الفورم لإضافة طلب جديد
const form = document.getElementById("orderForm");  
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // أخذ القيم من الفورم
  let name = document.getElementById("mealName").value;
  let price = document.getElementById("mealPrice").value;
  let image = document.getElementById("mealImage").value;

  // إنشاء Order جديد
  let newOrder = new Order(name, price, image);

  // إضافة الطلب للمصفوفة
  orders.push(newOrder);

  // تحديث الجدول
  renderTable();

  // مسح الفورم بعد الإضافة
  form.reset();
});


// دالة لعرض الطلبات في الجدول
function renderTable() {
  table.innerHTML = "";
  orders.forEach((order) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${order.mealName}</td>
      <td>${order.mealPrice}</td>
      <td><img src="${order.mealImage}" " width="100"></td>
    `;
    table.appendChild(row);
  });
  
}

// زر لمسح كل الطلبات
const clearBtn = document.getElementById("clearOrders");
clearBtn.addEventListener("click", function() {
  orders.length = 0;
  renderTable();
});