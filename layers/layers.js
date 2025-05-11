var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Runupmedio_1 = new ol.format.GeoJSON();
var features_Runupmedio_1 = format_Runupmedio_1.readFeatures(json_Runupmedio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Runupmedio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Runupmedio_1.addFeatures(features_Runupmedio_1);
var lyr_Runupmedio_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Runupmedio_1, 
                style: style_Runupmedio_1,
                popuplayertitle: 'Runup medio',
                interactive: true,
                title: '<img src="styles/legend/Runupmedio_1.png" /> Runup medio'
            });
var format_Runup33_2 = new ol.format.GeoJSON();
var features_Runup33_2 = format_Runup33_2.readFeatures(json_Runup33_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Runup33_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Runup33_2.addFeatures(features_Runup33_2);
var lyr_Runup33_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Runup33_2, 
                style: style_Runup33_2,
                popuplayertitle: 'Runup 33%',
                interactive: true,
                title: '<img src="styles/legend/Runup33_2.png" /> Runup 33%'
            });
var format_Runup10_3 = new ol.format.GeoJSON();
var features_Runup10_3 = format_Runup10_3.readFeatures(json_Runup10_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Runup10_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Runup10_3.addFeatures(features_Runup10_3);
var lyr_Runup10_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Runup10_3, 
                style: style_Runup10_3,
                popuplayertitle: 'Runup 10%',
                interactive: true,
                title: '<img src="styles/legend/Runup10_3.png" /> Runup 10%'
            });
var format_LineadirivaMaggio2025_4 = new ol.format.GeoJSON();
var features_LineadirivaMaggio2025_4 = format_LineadirivaMaggio2025_4.readFeatures(json_LineadirivaMaggio2025_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LineadirivaMaggio2025_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineadirivaMaggio2025_4.addFeatures(features_LineadirivaMaggio2025_4);
var lyr_LineadirivaMaggio2025_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LineadirivaMaggio2025_4, 
                style: style_LineadirivaMaggio2025_4,
                popuplayertitle: 'Linea di riva Maggio 2025',
                interactive: true,
                title: '<img src="styles/legend/LineadirivaMaggio2025_4.png" /> Linea di riva Maggio 2025'
            });
var format_AreadiespansionefocetorrenteParise_5 = new ol.format.GeoJSON();
var features_AreadiespansionefocetorrenteParise_5 = format_AreadiespansionefocetorrenteParise_5.readFeatures(json_AreadiespansionefocetorrenteParise_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreadiespansionefocetorrenteParise_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreadiespansionefocetorrenteParise_5.addFeatures(features_AreadiespansionefocetorrenteParise_5);
var lyr_AreadiespansionefocetorrenteParise_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreadiespansionefocetorrenteParise_5, 
                style: style_AreadiespansionefocetorrenteParise_5,
                popuplayertitle: 'Area di espansione foce torrente Parise',
                interactive: true,
                title: '<img src="styles/legend/AreadiespansionefocetorrenteParise_5.png" /> Area di espansione foce torrente Parise'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_Runupmedio_1.setVisible(true);lyr_Runup33_2.setVisible(true);lyr_Runup10_3.setVisible(true);lyr_LineadirivaMaggio2025_4.setVisible(true);lyr_AreadiespansionefocetorrenteParise_5.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_Runupmedio_1,lyr_Runup33_2,lyr_Runup10_3,lyr_LineadirivaMaggio2025_4,lyr_AreadiespansionefocetorrenteParise_5];
lyr_Runupmedio_1.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', 'name': 'name', 'solid': 'solid', 'associative': 'associative', 'hstyle': 'hstyle', 'hpattern': 'hpattern', 'doubleflag': 'doubleflag', 'angle': 'angle', 'scale': 'scale', 'deflines': 'deflines', });
lyr_Runup33_2.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', 'name': 'name', 'solid': 'solid', 'associative': 'associative', 'hstyle': 'hstyle', 'hpattern': 'hpattern', 'doubleflag': 'doubleflag', 'angle': 'angle', 'scale': 'scale', 'deflines': 'deflines', });
lyr_Runup10_3.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', 'name': 'name', 'solid': 'solid', 'associative': 'associative', 'hstyle': 'hstyle', 'hpattern': 'hpattern', 'doubleflag': 'doubleflag', 'angle': 'angle', 'scale': 'scale', 'deflines': 'deflines', });
lyr_LineadirivaMaggio2025_4.set('fieldAliases', {'block': 'block', 'color': 'color', 'color24': 'color24', 'etype': 'etype', 'ext': 'ext', 'fid': 'fid', 'handle': 'handle', 'layer': 'layer', 'linetype': 'linetype', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'lweight': 'lweight', 'ocolor': 'ocolor', 'olinetype': 'olinetype', 'space': 'space', 'thickness': 'thickness', 'transparency': 'transparency', 'visible': 'visible', 'width': 'width', });
lyr_AreadiespansionefocetorrenteParise_5.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', 'name': 'name', 'solid': 'solid', 'associative': 'associative', 'hstyle': 'hstyle', 'hpattern': 'hpattern', 'doubleflag': 'doubleflag', 'angle': 'angle', 'scale': 'scale', 'deflines': 'deflines', });
lyr_Runupmedio_1.set('fieldImages', {'fid': 'Range', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'name': 'TextEdit', 'solid': 'Range', 'associative': 'Range', 'hstyle': 'Range', 'hpattern': 'Range', 'doubleflag': 'Range', 'angle': 'TextEdit', 'scale': 'TextEdit', 'deflines': 'Range', });
lyr_Runup33_2.set('fieldImages', {'fid': 'Range', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'name': 'TextEdit', 'solid': 'Range', 'associative': 'Range', 'hstyle': 'Range', 'hpattern': 'Range', 'doubleflag': 'Range', 'angle': 'TextEdit', 'scale': 'TextEdit', 'deflines': 'Range', });
lyr_Runup10_3.set('fieldImages', {'fid': 'Range', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'name': 'TextEdit', 'solid': 'Range', 'associative': 'Range', 'hstyle': 'Range', 'hpattern': 'Range', 'doubleflag': 'Range', 'angle': 'TextEdit', 'scale': 'TextEdit', 'deflines': 'Range', });
lyr_LineadirivaMaggio2025_4.set('fieldImages', {'block': 'Range', 'color': 'TextEdit', 'color24': 'Range', 'etype': 'Range', 'ext': 'TextEdit', 'fid': 'Range', 'handle': 'Range', 'layer': 'TextEdit', 'linetype': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'lweight': 'Range', 'ocolor': 'Range', 'olinetype': 'TextEdit', 'space': 'Range', 'thickness': 'TextEdit', 'transparency': 'Range', 'visible': 'Range', 'width': 'TextEdit', });
lyr_AreadiespansionefocetorrenteParise_5.set('fieldImages', {'fid': 'Range', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'name': 'TextEdit', 'solid': 'Range', 'associative': 'Range', 'hstyle': 'Range', 'hpattern': 'Range', 'doubleflag': 'Range', 'angle': 'TextEdit', 'scale': 'TextEdit', 'deflines': 'Range', });
lyr_Runupmedio_1.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'thickness': 'no label', 'ext': 'no label', 'name': 'no label', 'solid': 'no label', 'associative': 'no label', 'hstyle': 'no label', 'hpattern': 'no label', 'doubleflag': 'no label', 'angle': 'no label', 'scale': 'no label', 'deflines': 'no label', });
lyr_Runup33_2.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'thickness': 'no label', 'ext': 'no label', 'name': 'no label', 'solid': 'no label', 'associative': 'no label', 'hstyle': 'no label', 'hpattern': 'no label', 'doubleflag': 'no label', 'angle': 'no label', 'scale': 'no label', 'deflines': 'no label', });
lyr_Runup10_3.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'thickness': 'no label', 'ext': 'no label', 'name': 'no label', 'solid': 'no label', 'associative': 'no label', 'hstyle': 'no label', 'hpattern': 'no label', 'doubleflag': 'no label', 'angle': 'no label', 'scale': 'no label', 'deflines': 'no label', });
lyr_LineadirivaMaggio2025_4.set('fieldLabels', {'block': 'no label', 'color': 'no label', 'color24': 'no label', 'etype': 'no label', 'ext': 'no label', 'fid': 'no label', 'handle': 'no label', 'layer': 'no label', 'linetype': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'lweight': 'no label', 'ocolor': 'no label', 'olinetype': 'no label', 'space': 'no label', 'thickness': 'no label', 'transparency': 'no label', 'visible': 'no label', 'width': 'no label', });
lyr_AreadiespansionefocetorrenteParise_5.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'thickness': 'no label', 'ext': 'no label', 'name': 'no label', 'solid': 'no label', 'associative': 'no label', 'hstyle': 'no label', 'hpattern': 'no label', 'doubleflag': 'no label', 'angle': 'no label', 'scale': 'no label', 'deflines': 'no label', });
lyr_AreadiespansionefocetorrenteParise_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});