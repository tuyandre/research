<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $table = 'categories';
    protected $fillable = ['name'];
    protected $hidden = [];
    public function Subcategory()
    {
        return $this->hasMany('App\Models\Subcategory','category_id');
    }
}