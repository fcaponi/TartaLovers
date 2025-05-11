var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenTopoMap_1 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_3 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatellite_4 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Runupmedio_5 = new ol.format.GeoJSON();
var features_Runupmedio_5 = format_Runupmedio_5.readFeatures(json_Runupmedio_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Runupmedio_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Runupmedio_5.addFeatures(features_Runupmedio_5);
var lyr_Runupmedio_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Runupmedio_5, 
                style: style_Runupmedio_5,
                popuplayertitle: 'Runup medio',
                interactive: true,
                title: '<img src="styles/legend/Runupmedio_5.png" /> Runup medio'
            });
var format_Runup33_6 = new ol.format.GeoJSON();
var features_Runup33_6 = format_Runup33_6.readFeatures(json_Runup33_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Runup33_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Runup33_6.addFeatures(features_Runup33_6);
var lyr_Runup33_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Runup33_6, 
                style: style_Runup33_6,
                popuplayertitle: 'Runup 33%',
                interactive: true,
                title: '<img src="styles/legend/Runup33_6.png" /> Runup 33%'
            });
var format_Runup10_7 = new ol.format.GeoJSON();
var features_Runup10_7 = format_Runup10_7.readFeatures(json_Runup10_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Runup10_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Runup10_7.addFeatures(features_Runup10_7);
var lyr_Runup10_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Runup10_7, 
                style: style_Runup10_7,
                popuplayertitle: 'Runup 10%',
                interactive: true,
                title: '<img src="styles/legend/Runup10_7.png" /> Runup 10%'
            });
var format_LineadirivaMaggio2025_8 = new ol.format.GeoJSON();
var features_LineadirivaMaggio2025_8 = format_LineadirivaMaggio2025_8.readFeatures(json_LineadirivaMaggio2025_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LineadirivaMaggio2025_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineadirivaMaggio2025_8.addFeatures(features_LineadirivaMaggio2025_8);
var lyr_LineadirivaMaggio2025_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LineadirivaMaggio2025_8, 
                style: style_LineadirivaMaggio2025_8,
                popuplayertitle: 'Linea di riva Maggio 2025',
                interactive: true,
                title: '<img src="styles/legend/LineadirivaMaggio2025_8.png" /> Linea di riva Maggio 2025'
            });
var format_AreadiespansionefocetorrenteParise_9 = new ol.format.GeoJSON();
var features_AreadiespansionefocetorrenteParise_9 = format_AreadiespansionefocetorrenteParise_9.readFeatures(json_AreadiespansionefocetorrenteParise_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreadiespansionefocetorrenteParise_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreadiespansionefocetorrenteParise_9.addFeatures(features_AreadiespansionefocetorrenteParise_9);
var lyr_AreadiespansionefocetorrenteParise_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreadiespansionefocetorrenteParise_9, 
                style: style_AreadiespansionefocetorrenteParise_9,
                popuplayertitle: 'Area di espansione foce torrente Parise',
                interactive: true,
                title: '<img src="styles/legend/AreadiespansionefocetorrenteParise_9.png" /> Area di espansione foce torrente Parise'
            });

lyr_OSMStandard_0.setVisible(true);lyr_OpenTopoMap_1.setVisible(true);lyr_GoogleHybrid_2.setVisible(true);lyr_GoogleSatellite_3.setVisible(true);lyr_ESRISatellite_4.setVisible(true);lyr_Runupmedio_5.setVisible(true);lyr_Runup33_6.setVisible(true);lyr_Runup10_7.setVisible(true);lyr_LineadirivaMaggio2025_8.setVisible(true);lyr_AreadiespansionefocetorrenteParise_9.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_OpenTopoMap_1,lyr_GoogleHybrid_2,lyr_GoogleSatellite_3,lyr_ESRISatellite_4,lyr_Runupmedio_5,lyr_Runup33_6,lyr_Runup10_7,lyr_LineadirivaMaggio2025_8,lyr_AreadiespansionefocetorrenteParise_9];
lyr_Runupmedio_5.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', 'name': 'name', 'solid': 'solid', 'associative': 'associative', 'hstyle': 'hstyle', 'hpattern': 'hpattern', 'doubleflag': 'doubleflag', 'angle': 'angle', 'scale': 'scale', 'deflines': 'deflines', });
lyr_Runup33_6.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', 'name': 'name', 'solid': 'solid', 'associative': 'associative', 'hstyle': 'hstyle', 'hpattern': 'hpattern', 'doubleflag': 'doubleflag', 'angle': 'angle', 'scale': 'scale', 'deflines': 'deflines', });
lyr_Runup10_7.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', 'name': 'name', 'solid': 'solid', 'associative': 'associative', 'hstyle': 'hstyle', 'hpattern': 'hpattern', 'doubleflag': 'doubleflag', 'angle': 'angle', 'scale': 'scale', 'deflines': 'deflines', });
lyr_LineadirivaMaggio2025_8.set('fieldAliases', {'block': 'block', 'color': 'color', 'color24': 'color24', 'etype': 'etype', 'ext': 'ext', 'fid': 'fid', 'handle': 'handle', 'layer': 'layer', 'linetype': 'linetype', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'lweight': 'lweight', 'ocolor': 'ocolor', 'olinetype': 'olinetype', 'space': 'space', 'thickness': 'thickness', 'transparency': 'transparency', 'visible': 'visible', 'width': 'width', });
lyr_AreadiespansionefocetorrenteParise_9.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', 'name': 'name', 'solid': 'solid', 'associative': 'associative', 'hstyle': 'hstyle', 'hpattern': 'hpattern', 'doubleflag': 'doubleflag', 'angle': 'angle', 'scale': 'scale', 'deflines': 'deflines', });
lyr_Runupmedio_5.set('fieldImages', {'fid': 'Range', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'name': 'TextEdit', 'solid': 'Range', 'associative': 'Range', 'hstyle': 'Range', 'hpattern': 'Range', 'doubleflag': 'Range', 'angle': 'TextEdit', 'scale': 'TextEdit', 'deflines': 'Range', });
lyr_Runup33_6.set('fieldImages', {'fid': 'Range', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'name': 'TextEdit', 'solid': 'Range', 'associative': 'Range', 'hstyle': 'Range', 'hpattern': 'Range', 'doubleflag': 'Range', 'angle': 'TextEdit', 'scale': 'TextEdit', 'deflines': 'Range', });
lyr_Runup10_7.set('fieldImages', {'fid': 'Range', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'name': 'TextEdit', 'solid': 'Range', 'associative': 'Range', 'hstyle': 'Range', 'hpattern': 'Range', 'doubleflag': 'Range', 'angle': 'TextEdit', 'scale': 'TextEdit', 'deflines': 'Range', });
lyr_LineadirivaMaggio2025_8.set('fieldImages', {'block': 'Range', 'color': 'TextEdit', 'color24': 'Range', 'etype': 'Range', 'ext': 'TextEdit', 'fid': 'Range', 'handle': 'Range', 'layer': 'TextEdit', 'linetype': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'lweight': 'Range', 'ocolor': 'Range', 'olinetype': 'TextEdit', 'space': 'Range', 'thickness': 'TextEdit', 'transparency': 'Range', 'visible': 'Range', 'width': 'TextEdit', });
lyr_AreadiespansionefocetorrenteParise_9.set('fieldImages', {'fid': 'Range', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'name': 'TextEdit', 'solid': 'Range', 'associative': 'Range', 'hstyle': 'Range', 'hpattern': 'Range', 'doubleflag': 'Range', 'angle': 'TextEdit', 'scale': 'TextEdit', 'deflines': 'Range', });
lyr_Runupmedio_5.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'thickness': 'no label', 'ext': 'no label', 'name': 'no label', 'solid': 'no label', 'associative': 'no label', 'hstyle': 'no label', 'hpattern': 'no label', 'doubleflag': 'no label', 'angle': 'no label', 'scale': 'no label', 'deflines': 'no label', });
lyr_Runup33_6.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'thickness': 'no label', 'ext': 'no label', 'name': 'no label', 'solid': 'no label', 'associative': 'no label', 'hstyle': 'no label', 'hpattern': 'no label', 'doubleflag': 'no label', 'angle': 'no label', 'scale': 'no label', 'deflines': 'no label', });
lyr_Runup10_7.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'thickness': 'no label', 'ext': 'no label', 'name': 'no label', 'solid': 'no label', 'associative': 'no label', 'hstyle': 'no label', 'hpattern': 'no label', 'doubleflag': 'no label', 'angle': 'no label', 'scale': 'no label', 'deflines': 'no label', });
lyr_LineadirivaMaggio2025_8.set('fieldLabels', {'block': 'no label', 'color': 'no label', 'color24': 'no label', 'etype': 'no label', 'ext': 'no label', 'fid': 'no label', 'handle': 'no label', 'layer': 'no label', 'linetype': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'lweight': 'no label', 'ocolor': 'no label', 'olinetype': 'no label', 'space': 'no label', 'thickness': 'no label', 'transparency': 'no label', 'visible': 'no label', 'width': 'no label', });
lyr_AreadiespansionefocetorrenteParise_9.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'thickness': 'no label', 'ext': 'no label', 'name': 'no label', 'solid': 'no label', 'associative': 'no label', 'hstyle': 'no label', 'hpattern': 'no label', 'doubleflag': 'no label', 'angle': 'no label', 'scale': 'no label', 'deflines': 'no label', });
lyr_AreadiespansionefocetorrenteParise_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});