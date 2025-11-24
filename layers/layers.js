var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WA_PUM_1 = new ol.format.GeoJSON();
var features_WA_PUM_1 = format_WA_PUM_1.readFeatures(json_WA_PUM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WA_PUM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WA_PUM_1.addFeatures(features_WA_PUM_1);
var lyr_WA_PUM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WA_PUM_1, 
                style: style_WA_PUM_1,
                popuplayertitle: 'WA_PUM',
                interactive: true,
                title: '<img src="styles/legend/WA_PUM_1.png" /> WA_PUM'
            });
var format_Update_SP_112025_2 = new ol.format.GeoJSON();
var features_Update_SP_112025_2 = format_Update_SP_112025_2.readFeatures(json_Update_SP_112025_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Update_SP_112025_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Update_SP_112025_2.addFeatures(features_Update_SP_112025_2);
var lyr_Update_SP_112025_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Update_SP_112025_2, 
                style: style_Update_SP_112025_2,
                popuplayertitle: 'Update_SP_112025',
                interactive: true,
                title: '<img src="styles/legend/Update_SP_112025_2.png" /> Update_SP_112025'
            });
var format_Update_DW_112025_3 = new ol.format.GeoJSON();
var features_Update_DW_112025_3 = format_Update_DW_112025_3.readFeatures(json_Update_DW_112025_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Update_DW_112025_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Update_DW_112025_3.addFeatures(features_Update_DW_112025_3);
var lyr_Update_DW_112025_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Update_DW_112025_3, 
                style: style_Update_DW_112025_3,
                popuplayertitle: 'Update_DW_112025',
                interactive: true,
                title: '<img src="styles/legend/Update_DW_112025_3.png" /> Update_DW_112025'
            });
var format_Update_CB_112025_4 = new ol.format.GeoJSON();
var features_Update_CB_112025_4 = format_Update_CB_112025_4.readFeatures(json_Update_CB_112025_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Update_CB_112025_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Update_CB_112025_4.addFeatures(features_Update_CB_112025_4);
var lyr_Update_CB_112025_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Update_CB_112025_4, 
                style: style_Update_CB_112025_4,
                popuplayertitle: 'Update_CB_112025',
                interactive: true,
                title: '<img src="styles/legend/Update_CB_112025_4.png" /> Update_CB_112025'
            });
var format_Access_5 = new ol.format.GeoJSON();
var features_Access_5 = format_Access_5.readFeatures(json_Access_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Access_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Access_5.addFeatures(features_Access_5);
var lyr_Access_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Access_5, 
                style: style_Access_5,
                popuplayertitle: 'Access',
                interactive: true,
    title: 'Access<br />\
    <img src="styles/legend/Access_5_0.png" /> Ground<br />\
    <img src="styles/legend/Access_5_1.png" /> Waterways<br />\
    <img src="styles/legend/Access_5_2.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_WA_PUM_1.setVisible(true);lyr_Update_SP_112025_2.setVisible(true);lyr_Update_DW_112025_3.setVisible(true);lyr_Update_CB_112025_4.setVisible(true);lyr_Access_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_WA_PUM_1,lyr_Update_SP_112025_2,lyr_Update_DW_112025_3,lyr_Update_CB_112025_4,lyr_Access_5];
lyr_WA_PUM_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'luas': 'luas', });
lyr_Update_SP_112025_2.set('fieldAliases', {'SP_ID': 'SP_ID', 'Date': 'Date', 'X': 'X', 'Y': 'Y', });
lyr_Update_DW_112025_3.set('fieldAliases', {'SP_ID': 'SP_ID', 'Date': 'Date', 'X': 'X', 'Y': 'Y', });
lyr_Update_CB_112025_4.set('fieldAliases', {'CB_ID': 'CB_ID', 'Date': 'Date', 'X': 'X', 'Y': 'Y', });
lyr_Access_5.set('fieldAliases', {'Name': 'Name', 'Type': 'Type', 'Width': 'Width', 'Status': 'Status', 'Source': 'Source', 'Owner': 'Owner', 'LENGTH': 'LENGTH', 'Name_2': 'Name_2', 'Note': 'Note', 'Note2': 'Note2', });
lyr_WA_PUM_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'luas': 'TextEdit', });
lyr_Update_SP_112025_2.set('fieldImages', {'SP_ID': 'TextEdit', 'Date': 'DateTime', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Update_DW_112025_3.set('fieldImages', {'SP_ID': 'TextEdit', 'Date': 'DateTime', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Update_CB_112025_4.set('fieldImages', {'CB_ID': 'TextEdit', 'Date': 'DateTime', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Access_5.set('fieldImages', {'Name': 'TextEdit', 'Type': 'TextEdit', 'Width': 'TextEdit', 'Status': 'TextEdit', 'Source': 'TextEdit', 'Owner': 'TextEdit', 'LENGTH': 'TextEdit', 'Name_2': 'TextEdit', 'Note': 'TextEdit', 'Note2': 'TextEdit', });
lyr_WA_PUM_1.set('fieldLabels', {'NAMOBJ': 'no label', 'luas': 'no label', });
lyr_Update_SP_112025_2.set('fieldLabels', {'SP_ID': 'inline label - always visible', 'Date': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', });
lyr_Update_DW_112025_3.set('fieldLabels', {'SP_ID': 'inline label - always visible', 'Date': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', });
lyr_Update_CB_112025_4.set('fieldLabels', {'CB_ID': 'inline label - always visible', 'Date': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', });
lyr_Access_5.set('fieldLabels', {'Name': 'no label', 'Type': 'no label', 'Width': 'no label', 'Status': 'no label', 'Source': 'no label', 'Owner': 'no label', 'LENGTH': 'no label', 'Name_2': 'no label', 'Note': 'no label', 'Note2': 'no label', });
lyr_Access_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});