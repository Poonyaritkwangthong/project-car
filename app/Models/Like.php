<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use HasFactory;
    protected $table = 'like';
    protected $fillable = [
        'car_like',
        'like_value',
        'user_like_id',
        'car_like_id',
    ]
    ;
}
