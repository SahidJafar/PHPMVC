$(function() {

    //ButtonTambah 
    $('.tombolTambahData').on('click', function(){
        
        $('#formModalLabel').html('Tambah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Tambah Data Mahasiswa')
       

        $('#nama').val('');
        $('#nrp').val('');
        $('#email').val('');
        $('#jurusan').val('');
        $('#id').val('');

        
    });

    // ButtonUbah
    $('.tampilModalUbah').on('click', function(){
        
        $('#formModalLabel').html('Ubah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Ubah Data Mahasiswa')
        $('.modal-body form').attr('action', 'http://localhost/PHPMVC/public/mahasiswa/ubah');
    
        const id = $(this).data('id');
        
        $.ajax({
            url: 'http://localhost/PHPMVC/public/mahasiswa/getubah',
            data: {id : id},
            method: 'post',
            dataType: 'json',
            success: function(data) {
                $('#nama').val(data.nama);
                $("#nrp").val(data.nrp);
                $("#email").val(data.email);
                $("#jurusan").val(data.jurusan);
                $("#id").val(data.id);
            }
        
        });
    });
});