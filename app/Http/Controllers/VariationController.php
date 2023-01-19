<?php

namespace App\Http\Controllers;

use App\Models\VariationMatches;
use Illuminate\Http\Request;

class VariationController extends Controller
{
    public function getVariactionMatchings()
    {
        $getAllVariactions = VariationMatches::all();
        if (count($getAllVariactions) > 0) {
            foreach ($getAllVariactions as $key => $value) {
                $value->matching_ids = explode(',', $value->matching_ids);
            }
        }
        return response()->json([
            'status' => true,
            'message' => 'Variation matching fetched successfully',
            'data' => $getAllVariactions,
        ]);
    }
}
