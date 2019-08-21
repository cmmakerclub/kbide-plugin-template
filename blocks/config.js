module.exports = [
    {
        name: "Plugin name",
        blocks: [
            {
                xml:
                    `<block type="gpio_setup">
                        <value name="PIN">
                             <shadow type="math_number">
                                <field name="NUM">13</field>
                            </shadow>
                        </value>
                    </block>`
            },
            {
                xml:
                    `<block type="gpio_led_blink">
                        value name="PIN">
                             <shadow type="math_number">
                                <field name="NUM">13</field>
                            </shadow>
                        </value>
                        value name="DELAY">
                             <shadow type="math_number">
                                <field name="NUM">1000</field>
                            </shadow>
                        </value>
                    </block>`
            }
        ]
    }
];