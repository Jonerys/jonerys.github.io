L.Control.Button = L.Control.extend({
    options: {
        position: 'topleft',
		buttonFunction: function (){
			console.log('click');
		},
		className: 'custom-control',
		title: 'Кнопка'
    },
    onAdd: function (map) {
        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
        var button = L.DomUtil.create('a', 'leaflet-control-button ' + this.options.className, container);
        L.DomEvent.disableClickPropagation(button);
        L.DomEvent.on(button, 'click', this.options.buttonFunction);

        container.title = this.options.title;

        return container;
    },
    onRemove: function(map) {},
});