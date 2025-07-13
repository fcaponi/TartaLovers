var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRISatellite_2 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_3 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_4 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_OrtofotoMinAmbienteanni19881989_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://wms.pcn.minambiente.it/ogc?map%3D/ms_ogc/WMS_v1.3/raster/ortofoto_bn_88.map",
                              attributions: ' ',
                              params: {
                                "LAYERS": "OI.ORTOIMMAGINI.1988.33",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortofoto Min. Ambiente anni 1988-1989',
                            popuplayertitle: 'Ortofoto Min. Ambiente anni 1988-1989',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OrtofotoMinAmbienteanni19881989_5, 0]);
var lyr_OrtofotoMinAmbienteanni19941998_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://wms.pcn.minambiente.it/ogc?map%3D/ms_ogc/WMS_v1.3/raster/ortofoto_bn_94.map",
                              attributions: ' ',
                              params: {
                                "LAYERS": "OI.ORTOIMMAGINI.1994.33",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortofoto Min. Ambiente anni 1994-1998',
                            popuplayertitle: 'Ortofoto Min. Ambiente anni 1994-1998',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OrtofotoMinAmbienteanni19941998_6, 0]);
var lyr_OrtofotoMinAmbienteanno2000_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://wms.pcn.minambiente.it/ogc?map%3D/ms_ogc/WMS_v1.3/raster/ortofoto_colore_00.map",
                              attributions: ' ',
                              params: {
                                "LAYERS": "OI.ORTOIMMAGINI.2000.33",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortofoto Min. Ambiente anno 2000',
                            popuplayertitle: 'Ortofoto Min. Ambiente anno 2000',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OrtofotoMinAmbienteanno2000_7, 0]);
var lyr_OrtofotoMinAmbienteanno2006_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://wms.pcn.minambiente.it/ogc?map%3D/ms_ogc/WMS_v1.3/raster/ortofoto_colore_06.map",
                              attributions: ' ',
                              params: {
                                "LAYERS": "OI.ORTOIMMAGINI.2006.33",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortofoto Min. Ambiente anno 2006',
                            popuplayertitle: 'Ortofoto Min. Ambiente anno 2006',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OrtofotoMinAmbienteanno2006_8, 0]);
var lyr_OrtofotoMinAmbienteanno2012_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://wms.pcn.minambiente.it/ogc?map%3D/ms_ogc/WMS_v1.3/raster/ortofoto_colore_12.map",
                              attributions: ' ',
                              params: {
                                "LAYERS": "OI.ORTOIMMAGINI.2012.33",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortofoto Min. Ambiente anno 2012',
                            popuplayertitle: 'Ortofoto Min. Ambiente anno 2012',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OrtofotoMinAmbienteanno2012_9, 0]);
var format_ProvinceISTATLimitiAmministrativinongeneralizzati20250101_10 = new ol.format.GeoJSON();
var features_ProvinceISTATLimitiAmministrativinongeneralizzati20250101_10 = format_ProvinceISTATLimitiAmministrativinongeneralizzati20250101_10.readFeatures(json_ProvinceISTATLimitiAmministrativinongeneralizzati20250101_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvinceISTATLimitiAmministrativinongeneralizzati20250101_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvinceISTATLimitiAmministrativinongeneralizzati20250101_10.addFeatures(features_ProvinceISTATLimitiAmministrativinongeneralizzati20250101_10);
var lyr_ProvinceISTATLimitiAmministrativinongeneralizzati20250101_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProvinceISTATLimitiAmministrativinongeneralizzati20250101_10, 
                style: style_ProvinceISTATLimitiAmministrativinongeneralizzati20250101_10,
                popuplayertitle: 'Province ISTAT (Limiti Amministrativi non generalizzati 2025-01-01)',
                interactive: true,
                title: '<img src="styles/legend/ProvinceISTATLimitiAmministrativinongeneralizzati20250101_10.png" /> Province ISTAT (Limiti Amministrativi non generalizzati 2025-01-01)'
            });
var format_Gizzeria_11 = new ol.format.GeoJSON();
var features_Gizzeria_11 = format_Gizzeria_11.readFeatures(json_Gizzeria_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gizzeria_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gizzeria_11.addFeatures(features_Gizzeria_11);
var lyr_Gizzeria_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gizzeria_11, 
                style: style_Gizzeria_11,
                popuplayertitle: 'Gizzeria',
                interactive: true,
                title: '<img src="styles/legend/Gizzeria_11.png" /> Gizzeria'
            });
var format_Falerna_12 = new ol.format.GeoJSON();
var features_Falerna_12 = format_Falerna_12.readFeatures(json_Falerna_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Falerna_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Falerna_12.addFeatures(features_Falerna_12);
var lyr_Falerna_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Falerna_12, 
                style: style_Falerna_12,
                popuplayertitle: 'Falerna',
                interactive: true,
                title: '<img src="styles/legend/Falerna_12.png" /> Falerna'
            });
var format_NoceraTerinese_13 = new ol.format.GeoJSON();
var features_NoceraTerinese_13 = format_NoceraTerinese_13.readFeatures(json_NoceraTerinese_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NoceraTerinese_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NoceraTerinese_13.addFeatures(features_NoceraTerinese_13);
var lyr_NoceraTerinese_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NoceraTerinese_13, 
                style: style_NoceraTerinese_13,
                popuplayertitle: 'Nocera Terinese',
                interactive: true,
                title: '<img src="styles/legend/NoceraTerinese_13.png" /> Nocera Terinese'
            });
var format_TransettiLIFETurtleNestCalabria_14 = new ol.format.GeoJSON();
var features_TransettiLIFETurtleNestCalabria_14 = format_TransettiLIFETurtleNestCalabria_14.readFeatures(json_TransettiLIFETurtleNestCalabria_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransettiLIFETurtleNestCalabria_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransettiLIFETurtleNestCalabria_14.addFeatures(features_TransettiLIFETurtleNestCalabria_14);
var lyr_TransettiLIFETurtleNestCalabria_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TransettiLIFETurtleNestCalabria_14, 
                style: style_TransettiLIFETurtleNestCalabria_14,
                popuplayertitle: 'Transetti LIFE TurtleNest Calabria',
                interactive: true,
                title: '<img src="styles/legend/TransettiLIFETurtleNestCalabria_14.png" /> Transetti LIFE TurtleNest Calabria'
            });
var format_EstremiTransettiLIFETurtleNestCalabria_15 = new ol.format.GeoJSON();
var features_EstremiTransettiLIFETurtleNestCalabria_15 = format_EstremiTransettiLIFETurtleNestCalabria_15.readFeatures(json_EstremiTransettiLIFETurtleNestCalabria_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstremiTransettiLIFETurtleNestCalabria_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstremiTransettiLIFETurtleNestCalabria_15.addFeatures(features_EstremiTransettiLIFETurtleNestCalabria_15);
var lyr_EstremiTransettiLIFETurtleNestCalabria_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstremiTransettiLIFETurtleNestCalabria_15, 
                style: style_EstremiTransettiLIFETurtleNestCalabria_15,
                popuplayertitle: 'Estremi Transetti LIFE TurtleNest Calabria',
                interactive: true,
                title: '<img src="styles/legend/EstremiTransettiLIFETurtleNestCalabria_15.png" /> Estremi Transetti LIFE TurtleNest Calabria'
            });
var format_Transetto1_16 = new ol.format.GeoJSON();
var features_Transetto1_16 = format_Transetto1_16.readFeatures(json_Transetto1_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transetto1_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transetto1_16.addFeatures(features_Transetto1_16);
var lyr_Transetto1_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Transetto1_16, 
                style: style_Transetto1_16,
                popuplayertitle: 'Transetto 1',
                interactive: true,
                title: '<img src="styles/legend/Transetto1_16.png" /> Transetto 1'
            });
var format_Transetto2_17 = new ol.format.GeoJSON();
var features_Transetto2_17 = format_Transetto2_17.readFeatures(json_Transetto2_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transetto2_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transetto2_17.addFeatures(features_Transetto2_17);
var lyr_Transetto2_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Transetto2_17, 
                style: style_Transetto2_17,
                popuplayertitle: 'Transetto 2',
                interactive: true,
                title: '<img src="styles/legend/Transetto2_17.png" /> Transetto 2'
            });
var format_Transetto3_18 = new ol.format.GeoJSON();
var features_Transetto3_18 = format_Transetto3_18.readFeatures(json_Transetto3_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transetto3_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transetto3_18.addFeatures(features_Transetto3_18);
var lyr_Transetto3_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Transetto3_18, 
                style: style_Transetto3_18,
                popuplayertitle: 'Transetto 3',
                interactive: true,
                title: '<img src="styles/legend/Transetto3_18.png" /> Transetto 3'
            });
var group_Transetti = new ol.layer.Group({
                                layers: [lyr_TransettiLIFETurtleNestCalabria_14,lyr_EstremiTransettiLIFETurtleNestCalabria_15,lyr_Transetto1_16,lyr_Transetto2_17,lyr_Transetto3_18,],
                                fold: 'open',
                                title: 'Transetti'});
var group_Comuni = new ol.layer.Group({
                                layers: [lyr_ProvinceISTATLimitiAmministrativinongeneralizzati20250101_10,lyr_Gizzeria_11,lyr_Falerna_12,lyr_NoceraTerinese_13,],
                                fold: 'open',
                                title: 'Comuni'});
var group_BaseMaps = new ol.layer.Group({
                                layers: [lyr_ESRIStandard_0,lyr_OSMStandard_1,lyr_ESRISatellite_2,lyr_GoogleSatellite_3,lyr_GoogleHybrid_4,lyr_OrtofotoMinAmbienteanni19881989_5,lyr_OrtofotoMinAmbienteanni19941998_6,lyr_OrtofotoMinAmbienteanno2000_7,lyr_OrtofotoMinAmbienteanno2006_8,lyr_OrtofotoMinAmbienteanno2012_9,],
                                fold: 'open',
                                title: 'Base Maps'});

lyr_ESRIStandard_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_ESRISatellite_2.setVisible(true);lyr_GoogleSatellite_3.setVisible(true);lyr_GoogleHybrid_4.setVisible(true);lyr_OrtofotoMinAmbienteanni19881989_5.setVisible(true);lyr_OrtofotoMinAmbienteanni19941998_6.setVisible(true);lyr_OrtofotoMinAmbienteanno2000_7.setVisible(true);lyr_OrtofotoMinAmbienteanno2006_8.setVisible(true);lyr_OrtofotoMinAmbienteanno2012_9.setVisible(true);lyr_ProvinceISTATLimitiAmministrativinongeneralizzati20250101_10.setVisible(true);lyr_Gizzeria_11.setVisible(true);lyr_Falerna_12.setVisible(true);lyr_NoceraTerinese_13.setVisible(true);lyr_TransettiLIFETurtleNestCalabria_14.setVisible(true);lyr_EstremiTransettiLIFETurtleNestCalabria_15.setVisible(true);lyr_Transetto1_16.setVisible(true);lyr_Transetto2_17.setVisible(true);lyr_Transetto3_18.setVisible(true);
var layersList = [group_BaseMaps,group_Comuni,group_Transetti];
lyr_ProvinceISTATLimitiAmministrativinongeneralizzati20250101_10.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'DEN_PROV': 'DEN_PROV', 'DEN_CM': 'DEN_CM', 'DEN_UTS': 'DEN_UTS', 'SIGLA': 'SIGLA', 'TIPO_UTS': 'TIPO_UTS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Gizzeria_11.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'PRO_COM': 'PRO_COM', 'PRO_COM_T': 'PRO_COM_T', 'COMUNE': 'COMUNE', 'COMUNE_A': 'COMUNE_A', 'CC_UTS': 'CC_UTS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Falerna_12.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'PRO_COM': 'PRO_COM', 'PRO_COM_T': 'PRO_COM_T', 'COMUNE': 'COMUNE', 'COMUNE_A': 'COMUNE_A', 'CC_UTS': 'CC_UTS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_NoceraTerinese_13.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'PRO_COM': 'PRO_COM', 'PRO_COM_T': 'PRO_COM_T', 'COMUNE': 'COMUNE', 'COMUNE_A': 'COMUNE_A', 'CC_UTS': 'CC_UTS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_TransettiLIFETurtleNestCalabria_14.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'DEN_REG': 'DEN_REG', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_EstremiTransettiLIFETurtleNestCalabria_15.set('fieldAliases', {'ID punto': 'ID punto', 'Tipo punto': 'Tipo punto', 'Nome punto': 'Nome punto', 'Latitudine_Y': 'Latitudine_Y', 'Longitudine_X': 'Longitudine_X', 'Gruppo transetto': 'Gruppo transetto', 'ID transetto': 'ID transetto', 'Nome transetto': 'Nome transetto', });
lyr_Transetto1_16.set('fieldAliases', {'tipo': 'tipo', 'nome': 'nome', 'gruppo': 'gruppo', 'inizio': 'inizio', 'fine': 'fine', 'lunghezza_km': 'lunghezza_km', 'nome_transetto': 'nome_transetto', });
lyr_Transetto2_17.set('fieldAliases', {'tipo': 'tipo', 'nome': 'nome', 'gruppo': 'gruppo', 'inizio': 'inizio', 'fine': 'fine', 'lunghezza_km': 'lunghezza_km', 'nome_transetto': 'nome_transetto', });
lyr_Transetto3_18.set('fieldAliases', {'tipo': 'tipo', 'nome': 'nome', 'gruppo': 'gruppo', 'inizio': 'inizio', 'fine': 'fine', 'lunghezza_km': 'lunghezza_km', 'nome_transetto': 'nome_transetto', });
lyr_ProvinceISTATLimitiAmministrativinongeneralizzati20250101_10.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_CM': 'TextEdit', 'COD_UTS': 'TextEdit', 'DEN_PROV': 'TextEdit', 'DEN_CM': 'TextEdit', 'DEN_UTS': 'TextEdit', 'SIGLA': 'TextEdit', 'TIPO_UTS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Gizzeria_11.set('fieldImages', {'COD_RIP': 'Range', 'COD_REG': 'Range', 'COD_PROV': 'Range', 'COD_CM': 'Range', 'COD_UTS': 'Range', 'PRO_COM': 'Range', 'PRO_COM_T': 'TextEdit', 'COMUNE': 'TextEdit', 'COMUNE_A': 'TextEdit', 'CC_UTS': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Falerna_12.set('fieldImages', {'COD_RIP': 'Range', 'COD_REG': 'Range', 'COD_PROV': 'Range', 'COD_CM': 'Range', 'COD_UTS': 'Range', 'PRO_COM': 'Range', 'PRO_COM_T': 'TextEdit', 'COMUNE': 'TextEdit', 'COMUNE_A': 'TextEdit', 'CC_UTS': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_NoceraTerinese_13.set('fieldImages', {'COD_RIP': 'Range', 'COD_REG': 'Range', 'COD_PROV': 'Range', 'COD_CM': 'Range', 'COD_UTS': 'Range', 'PRO_COM': 'Range', 'PRO_COM_T': 'TextEdit', 'COMUNE': 'TextEdit', 'COMUNE_A': 'TextEdit', 'CC_UTS': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TransettiLIFETurtleNestCalabria_14.set('fieldImages', {'COD_RIP': 'Range', 'COD_REG': 'Range', 'DEN_REG': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_EstremiTransettiLIFETurtleNestCalabria_15.set('fieldImages', {'ID punto': 'TextEdit', 'Tipo punto': 'TextEdit', 'Nome punto': 'TextEdit', 'Latitudine_Y': 'TextEdit', 'Longitudine_X': 'TextEdit', 'Gruppo transetto': 'TextEdit', 'ID transetto': 'TextEdit', 'Nome transetto': 'TextEdit', });
lyr_Transetto1_16.set('fieldImages', {'tipo': 'TextEdit', 'nome': 'TextEdit', 'gruppo': 'TextEdit', 'inizio': 'TextEdit', 'fine': 'TextEdit', 'lunghezza_km': 'TextEdit', 'nome_transetto': 'TextEdit', });
lyr_Transetto2_17.set('fieldImages', {'tipo': 'TextEdit', 'nome': 'TextEdit', 'gruppo': 'TextEdit', 'inizio': 'TextEdit', 'fine': 'TextEdit', 'lunghezza_km': 'TextEdit', 'nome_transetto': 'TextEdit', });
lyr_Transetto3_18.set('fieldImages', {'tipo': 'TextEdit', 'nome': 'TextEdit', 'gruppo': 'TextEdit', 'inizio': 'TextEdit', 'fine': 'TextEdit', 'lunghezza_km': 'TextEdit', 'nome_transetto': 'TextEdit', });
lyr_ProvinceISTATLimitiAmministrativinongeneralizzati20250101_10.set('fieldLabels', {'COD_RIP': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_CM': 'no label', 'COD_UTS': 'no label', 'DEN_PROV': 'no label', 'DEN_CM': 'no label', 'DEN_UTS': 'no label', 'SIGLA': 'no label', 'TIPO_UTS': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Gizzeria_11.set('fieldLabels', {'COD_RIP': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_CM': 'no label', 'COD_UTS': 'no label', 'PRO_COM': 'no label', 'PRO_COM_T': 'no label', 'COMUNE': 'no label', 'COMUNE_A': 'no label', 'CC_UTS': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Falerna_12.set('fieldLabels', {'COD_RIP': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_CM': 'no label', 'COD_UTS': 'no label', 'PRO_COM': 'no label', 'PRO_COM_T': 'no label', 'COMUNE': 'no label', 'COMUNE_A': 'no label', 'CC_UTS': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_NoceraTerinese_13.set('fieldLabels', {'COD_RIP': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_CM': 'no label', 'COD_UTS': 'no label', 'PRO_COM': 'no label', 'PRO_COM_T': 'no label', 'COMUNE': 'no label', 'COMUNE_A': 'no label', 'CC_UTS': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_TransettiLIFETurtleNestCalabria_14.set('fieldLabels', {'COD_RIP': 'no label', 'COD_REG': 'no label', 'DEN_REG': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_EstremiTransettiLIFETurtleNestCalabria_15.set('fieldLabels', {'ID punto': 'no label', 'Tipo punto': 'no label', 'Nome punto': 'no label', 'Latitudine_Y': 'no label', 'Longitudine_X': 'no label', 'Gruppo transetto': 'no label', 'ID transetto': 'no label', 'Nome transetto': 'no label', });
lyr_Transetto1_16.set('fieldLabels', {'tipo': 'no label', 'nome': 'no label', 'gruppo': 'no label', 'inizio': 'no label', 'fine': 'no label', 'lunghezza_km': 'no label', 'nome_transetto': 'no label', });
lyr_Transetto2_17.set('fieldLabels', {'tipo': 'no label', 'nome': 'no label', 'gruppo': 'no label', 'inizio': 'no label', 'fine': 'no label', 'lunghezza_km': 'no label', 'nome_transetto': 'no label', });
lyr_Transetto3_18.set('fieldLabels', {'tipo': 'no label', 'nome': 'no label', 'gruppo': 'no label', 'inizio': 'no label', 'fine': 'no label', 'lunghezza_km': 'no label', 'nome_transetto': 'no label', });
lyr_Transetto3_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});