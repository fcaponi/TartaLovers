var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatellite_3 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_FasciaRunupmedio_4 = new ol.format.GeoJSON();
var features_FasciaRunupmedio_4 = format_FasciaRunupmedio_4.readFeatures(json_FasciaRunupmedio_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasciaRunupmedio_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasciaRunupmedio_4.addFeatures(features_FasciaRunupmedio_4);
var lyr_FasciaRunupmedio_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasciaRunupmedio_4, 
                style: style_FasciaRunupmedio_4,
                popuplayertitle: 'Fascia Runup medio',
                interactive: true,
                title: '<img src="styles/legend/FasciaRunupmedio_4.png" /> Fascia Runup medio'
            });
var format_FasciaRunup33_5 = new ol.format.GeoJSON();
var features_FasciaRunup33_5 = format_FasciaRunup33_5.readFeatures(json_FasciaRunup33_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasciaRunup33_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasciaRunup33_5.addFeatures(features_FasciaRunup33_5);
var lyr_FasciaRunup33_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasciaRunup33_5, 
                style: style_FasciaRunup33_5,
                popuplayertitle: 'Fascia Runup 33%',
                interactive: true,
                title: '<img src="styles/legend/FasciaRunup33_5.png" /> Fascia Runup 33%'
            });
var format_FasciaRunup10_6 = new ol.format.GeoJSON();
var features_FasciaRunup10_6 = format_FasciaRunup10_6.readFeatures(json_FasciaRunup10_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasciaRunup10_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasciaRunup10_6.addFeatures(features_FasciaRunup10_6);
var lyr_FasciaRunup10_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasciaRunup10_6, 
                style: style_FasciaRunup10_6,
                popuplayertitle: 'Fascia Runup 10%',
                interactive: true,
                title: '<img src="styles/legend/FasciaRunup10_6.png" /> Fascia Runup 10%'
            });
var format_LineadirivaMaggio2025_7 = new ol.format.GeoJSON();
var features_LineadirivaMaggio2025_7 = format_LineadirivaMaggio2025_7.readFeatures(json_LineadirivaMaggio2025_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LineadirivaMaggio2025_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineadirivaMaggio2025_7.addFeatures(features_LineadirivaMaggio2025_7);
var lyr_LineadirivaMaggio2025_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LineadirivaMaggio2025_7, 
                style: style_LineadirivaMaggio2025_7,
                popuplayertitle: 'Linea di riva Maggio 2025',
                interactive: true,
                title: '<img src="styles/legend/LineadirivaMaggio2025_7.png" /> Linea di riva Maggio 2025'
            });
var format_AreadiespansionefoceTorrenteParise_8 = new ol.format.GeoJSON();
var features_AreadiespansionefoceTorrenteParise_8 = format_AreadiespansionefoceTorrenteParise_8.readFeatures(json_AreadiespansionefoceTorrenteParise_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreadiespansionefoceTorrenteParise_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreadiespansionefoceTorrenteParise_8.addFeatures(features_AreadiespansionefoceTorrenteParise_8);
var lyr_AreadiespansionefoceTorrenteParise_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreadiespansionefoceTorrenteParise_8, 
                style: style_AreadiespansionefoceTorrenteParise_8,
                popuplayertitle: 'Area di espansione foce Torrente Parise',
                interactive: false,
                title: '<img src="styles/legend/AreadiespansionefoceTorrenteParise_8.png" /> Area di espansione foce Torrente Parise'
            });
var format_Transetti_9 = new ol.format.GeoJSON();
var features_Transetti_9 = format_Transetti_9.readFeatures(json_Transetti_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transetti_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transetti_9.addFeatures(features_Transetti_9);
var lyr_Transetti_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Transetti_9, 
                style: style_Transetti_9,
                popuplayertitle: 'Transetti',
                interactive: false,
                title: 'Transetti'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_ESRISatellite_3.setVisible(true);lyr_FasciaRunupmedio_4.setVisible(true);lyr_FasciaRunup33_5.setVisible(true);lyr_FasciaRunup10_6.setVisible(true);lyr_LineadirivaMaggio2025_7.setVisible(true);lyr_AreadiespansionefoceTorrenteParise_8.setVisible(true);lyr_Transetti_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleHybrid_1,lyr_GoogleSatellite_2,lyr_ESRISatellite_3,lyr_FasciaRunupmedio_4,lyr_FasciaRunup33_5,lyr_FasciaRunup10_6,lyr_LineadirivaMaggio2025_7,lyr_AreadiespansionefoceTorrenteParise_8,lyr_Transetti_9];
lyr_FasciaRunupmedio_4.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', 'name': 'name', 'solid': 'solid', 'associative': 'associative', 'hstyle': 'hstyle', 'hpattern': 'hpattern', 'doubleflag': 'doubleflag', 'angle': 'angle', 'scale': 'scale', 'deflines': 'deflines', });
lyr_FasciaRunup33_5.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', 'name': 'name', 'solid': 'solid', 'associative': 'associative', 'hstyle': 'hstyle', 'hpattern': 'hpattern', 'doubleflag': 'doubleflag', 'angle': 'angle', 'scale': 'scale', 'deflines': 'deflines', });
lyr_FasciaRunup10_6.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', 'name': 'name', 'solid': 'solid', 'associative': 'associative', 'hstyle': 'hstyle', 'hpattern': 'hpattern', 'doubleflag': 'doubleflag', 'angle': 'angle', 'scale': 'scale', 'deflines': 'deflines', });
lyr_LineadirivaMaggio2025_7.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_AreadiespansionefoceTorrenteParise_8.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', 'name': 'name', 'solid': 'solid', 'associative': 'associative', 'hstyle': 'hstyle', 'hpattern': 'hpattern', 'doubleflag': 'doubleflag', 'angle': 'angle', 'scale': 'scale', 'deflines': 'deflines', });
lyr_Transetti_9.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', 'height': 'height', 'text': 'text', 'angle': 'angle', 'widthscale': 'widthscale', 'oblique': 'oblique', 'style': 'style', 'textgen': 'textgen', 'alignh': 'alignh', 'alignv': 'alignv', 'interlin': 'interlin', });
lyr_FasciaRunupmedio_4.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'name': 'TextEdit', 'solid': 'Range', 'associative': 'Range', 'hstyle': 'Range', 'hpattern': 'Range', 'doubleflag': 'Range', 'angle': 'TextEdit', 'scale': 'TextEdit', 'deflines': 'Range', });
lyr_FasciaRunup33_5.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'name': 'TextEdit', 'solid': 'Range', 'associative': 'Range', 'hstyle': 'Range', 'hpattern': 'Range', 'doubleflag': 'Range', 'angle': 'TextEdit', 'scale': 'TextEdit', 'deflines': 'Range', });
lyr_FasciaRunup10_6.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'name': 'TextEdit', 'solid': 'Range', 'associative': 'Range', 'hstyle': 'Range', 'hpattern': 'Range', 'doubleflag': 'Range', 'angle': 'TextEdit', 'scale': 'TextEdit', 'deflines': 'Range', });
lyr_LineadirivaMaggio2025_7.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_AreadiespansionefoceTorrenteParise_8.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'name': 'TextEdit', 'solid': 'Range', 'associative': 'Range', 'hstyle': 'Range', 'hpattern': 'Range', 'doubleflag': 'Range', 'angle': 'TextEdit', 'scale': 'TextEdit', 'deflines': 'Range', });
lyr_Transetti_9.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'height': 'TextEdit', 'text': 'TextEdit', 'angle': 'TextEdit', 'widthscale': 'TextEdit', 'oblique': 'TextEdit', 'style': 'TextEdit', 'textgen': 'Range', 'alignh': 'Range', 'alignv': 'Range', 'interlin': 'TextEdit', });
lyr_FasciaRunupmedio_4.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', 'name': 'hidden field', 'solid': 'hidden field', 'associative': 'hidden field', 'hstyle': 'hidden field', 'hpattern': 'hidden field', 'doubleflag': 'hidden field', 'angle': 'hidden field', 'scale': 'hidden field', 'deflines': 'hidden field', 'html_exp': 'no label', });
lyr_FasciaRunup33_5.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', 'name': 'hidden field', 'solid': 'hidden field', 'associative': 'hidden field', 'hstyle': 'hidden field', 'hpattern': 'hidden field', 'doubleflag': 'hidden field', 'angle': 'hidden field', 'scale': 'hidden field', 'deflines': 'hidden field', 'html_exp': 'no label', });
lyr_FasciaRunup10_6.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparency': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', 'name': 'hidden field', 'solid': 'hidden field', 'associative': 'hidden field', 'hstyle': 'hidden field', 'hpattern': 'hidden field', 'doubleflag': 'hidden field', 'angle': 'hidden field', 'scale': 'hidden field', 'deflines': 'hidden field', 'html_exp': 'no label', });
lyr_LineadirivaMaggio2025_7.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_AreadiespansionefoceTorrenteParise_8.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'thickness': 'no label', 'ext': 'no label', 'name': 'no label', 'solid': 'no label', 'associative': 'no label', 'hstyle': 'no label', 'hpattern': 'no label', 'doubleflag': 'no label', 'angle': 'no label', 'scale': 'no label', 'deflines': 'no label', });
lyr_Transetti_9.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'thickness': 'no label', 'ext': 'no label', 'height': 'no label', 'text': 'no label', 'angle': 'no label', 'widthscale': 'no label', 'oblique': 'no label', 'style': 'no label', 'textgen': 'no label', 'alignh': 'no label', 'alignv': 'no label', 'interlin': 'no label', });
lyr_Transetti_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});