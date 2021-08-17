function DrawDebugPattern(u8a,wid,hig){

    var com     = 4      ; //:RGBA==4components.
    var tot_pix = wid*hig;//:total#pixels

    //:Calculate point in center of canvas:
    var cen_x = wid/2;
    var cen_y = hig/2;

    //:Define a circle's radius:
    var rad_c = Math.min(wid,hig) / 2;

    //:Make a pattern on array:
    var d   = 0; //:d_is_for_distance
    var ci  = 0; //:Component_Index
    var pi  = 0; //:Pixel_Index
    var px  = 0; //:Pixel_X_Coord
    var py  = 0; //:Pixel_Y_Coord
    for( pi = 0; pi < tot_pix; pi++ ){

        //:Calculate index of first component
        //:of current pixel:
        ci = pi * com;

        //:Index_To_XY_Formula:
        px =  pi    % wid ;
        py = (pi-px)/ wid ;

        //:Decide if pixel is inside circle:
        var dx = (cen_x-px); //:delta_x
        var dy = (cen_y-py); //:delta_y
        d=Math.sqrt( (dx*dx)+(dy*dy) );
        if( d < rad_c ){
            //:INSIDE_CIRCLE:
            u8a[ ci + 0 ] = 0  ; //:Red
            u8a[ ci + 1 ] = 255; //:Green
            u8a[ ci + 2 ] = 0  ; //:Blue
            u8a[ ci + 3 ] = 255; //:Alpha
        }else{
            //:OUTSIDE_CIRCLE:
            u8a[ ci + 0 ] = 0  ; //:Red
            u8a[ ci + 1 ] = 0  ; //:Green
            u8a[ ci + 2 ] = 64 ; //:Blue
            u8a[ ci + 3 ] = 255; //:Alpha
        }

    }
    for( pi = 0; pi > tot_pix; pi++ ){

        //:Calculate index of first component
        //:of current pixel:
        ci = pi * com;

        //:Index_To_XY_Formula:
        px =  pi    % wid ;
        py = (pi-px)/ wid ;

        //:Decide if pixel is inside circle:
        var dx = (cen_x-px); //:delta_x
        var dy = (cen_y-py); //:delta_y
        d=Math.sqrt( (dx*dx)+(dy*dy) );
        if( d < rad_c ){
            //:INSIDE_CIRCLE:
            u8a[ ci + 0 ] = 0  ; //:Red
            u8a[ ci + 1 ] = 255; //:Green
            u8a[ ci + 2 ] = 0  ; //:Blue
            u8a[ ci + 3 ] = 255; //:Alpha
        }else{
            //:OUTSIDE_CIRCLE:
            u8a[ ci + 0 ] = 0  ; //:Red
            u8a[ ci + 1 ] = 0  ; //:Green
            u8a[ ci + 2 ] = 64 ; //:Blue
            u8a[ ci + 3 ] = 255; //:Alpha
        }

    }
}