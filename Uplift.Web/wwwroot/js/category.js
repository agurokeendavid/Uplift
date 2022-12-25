var dataTable;

$(function() {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        ajax: {
            url: `/admin/category/GetAll`,
            type: 'GET',
            datatype: 'json',
        },
        columns: [
            {
                data: 'Name',
                width: '50%'
            },
            {
                data: 'DisplayOrder',
                width: '50%'
            },
            {
                data: 'Id',
                render: function(data) {
                    return `<div class="text-center">
<a href="/Admin/Category/Upsert"></a>
</div>`;
                }
            }
        ]
    });
}