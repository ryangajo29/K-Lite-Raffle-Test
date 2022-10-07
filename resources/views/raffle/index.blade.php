@extends('raffle.layout')
@section('content')
{{-- <div class="row">
    <div class="col-lg-12">
        @foreach ($entry as $entry)
        <h3>ID:{{ $entry->id }}</h3>
        @endforeach
    </div>
</div> --}}
<div class="row">
    <div class="col-lg-12">
        <a href="#" class="btn btn-success" onclick="shuffle()">Display Random Game of Thrones Names</a>
    </div>
    <div class="col-lg-12" id="raffle_winner">
        <h3>Raffle Winner</h3>
        <h2>Congratulations</h2>
        <center>
        </center>
      </div>
</div>
@endsection