<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class LiveController extends Controller
{
    public function index()
    {
        if (\request()->ajax()) {
            $data['table'] = Student::where('login', '!=', 0)->get();
            return view('_data_live', $data);
        }
        return view('live');
    }
}
