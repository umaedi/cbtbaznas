<?php $i = 1 ?>
@foreach ($table as $tb)
<tr>
    <td>{{ $i++ }}</td>
    <td>{{ $tb->nisn }}</td>
    <td>{{ $tb->name }}</td>
    @if ($tb->login == 1)
    <td>Sedang Mengerjakan</td>
    @else
    <td>Selesai</td>
    @endif
</tr>   
@endforeach
