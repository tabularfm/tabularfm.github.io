var data = [
    { "COUNTRY":"UK", "LoC":"London", "BALANCE":"78,573", "DATE":"1/06/2018" },
    { "COUNTRY":"US", "LoC":"New York", "BALANCE":"43,568", "DATE":"18/05/2018" },
    { "COUNTRY":"PL", "LoC":"Kraków", "BALANCE":"12,362", "DATE":"22/06/2018" },
    { "COUNTRY":"AU", "LoC":"Townsville", "BALANCE":"7,569", "DATE":"1/07/2018" },
    { "COUNTRY":" ", "LoC":"BALANCE:", "BALANCE":"142,072", "DATE":" " }
];
var table = document.getElementById('gable');
data.forEach(function(object) {
    var tr = document.createElement('tr');
    tr.innerHTML = '<td>' + object.COUNTRY + '</td>' +
        '<td>' + object.LoC + '</td>' +
        '<td>' + object.BALANCE + '</td>' +
        '<td>' + object.DATE + '</td>';
    table.appendChild(tr);
});