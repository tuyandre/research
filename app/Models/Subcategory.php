<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subcategory extends Model
{
    use HasFactory;
    protected $table = 'subcategories';
    protected $fillable = ['category_id','name'];
    protected $hidden = [];
    public function Project()
    {
        return $this->hasMany('App\Models\Project','subcategory_id');
    }
    public function CallRequest()
    {
        return $this->hasMany('App\Models\Project','subcategory_id');
    }
    public function Contactu()
    {
        return $this->hasMany('App\Models\Project','subcategory_id');
    }
    public function Category()
    {
        return $this->belongsTo('App\Models\Category');
    }
}
