class MarkerPainter {
  // inputProperties returns a list of CSS properties that this paint function gets access to
  static get inputProperties () {
    return [
      '--marker-path',
      '--marker-color',
      // '--marker-size',
    ];
  }

  paint (ctx, geom, properties) {
    const { width, height } = geom;

    const color = properties.get('--marker-color').toString();
    console.log(this, color);
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);
  }
}

// Register our class under a specific name
registerPaint('marker', MarkerPainter);