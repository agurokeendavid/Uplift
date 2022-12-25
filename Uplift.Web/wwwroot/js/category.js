var dataTable;

$(function() {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        ajax: {
            url: `/Admin/Category/GetAll`,
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
<a href="/Admin/Category/Upsert/${data}" class="btn btn-success text-white" style="cursor: pointer; width: 100px;"><i class="far fa-edit"></i> Edit</a>
&nbsp;
<a onclick="Delete('/Admin/Category/Delete/${data}');" class="btn btn-danger text-white" style="cursor: pointer; width: 100px;"><i class="far fa-trash-alt"></i> Delete</a>
</div>`;
                },
                width: '30%'
            }
        ],
        language: {
            emptyTable: 'No records found'
        },
        width: '100%'
    });
}