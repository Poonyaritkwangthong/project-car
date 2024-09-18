<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Like;

class LikeCarController extends Controller
{
    public function index()
    {
        $likes = Like::all();
        return response()->json([
            'likes' => $likes
        ], 200);
    }
}
