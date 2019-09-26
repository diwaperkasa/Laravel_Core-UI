@extends('template.index')

@section('css')
    <style>
    </style>
@endsection

@section('content')
    <div class="card">
        <div class="card-body">
                <div class="form-group">
                    <button class="btn btn-primary">Halo</button>
                </div>
                <div class="form-group">
                    <label for="staticEmail">Email</label>
                    <input type="text" class="form-control" id="staticEmail" value="email@example.com">
                </div>
                <div class="form-group">
                    <label for="select-dol">Example select</label>
                    <select class="form-control" id="select-dol">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
        </div>
    </div>
@endsection

@section('js')
    <script>
    </script>
@endsection