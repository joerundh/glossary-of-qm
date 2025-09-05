const glossary = [
    {
        title: "Wave function",
        content: [
            {
                type: "text",
                value: "A complex function which describes the state of a quantum system. It may be a function of, say, the position, momentum, as well as time. It is generally found by solving a "
            },
            {
                type: "link",
                ref: "wave-equation",
                value: "wave equation"
            },
            {
                type: "text",
                value: ". Once found, the wave function can in principle be used to compute any property of interest of the system in question, i.e. the wave function \"fully describes\" the system."
            }
        ],
        ref: "wave-function"
    },
    {
        title: "Wave equation",
        ref: "wave-equation",
        content: [
            {
                type: "paragraph",
                parts: [
                    {
                        type: "text",
                        value: "A differential equation which describes how some wave evolves in time. The waves in question can be ocean waves, waves of light (electromagnetic waves), sound waves, et.al.; different types of waves generally follow different wave equations. In quantum physics, the solutions to a wave equation are called "
                    },
                    {
                        type: "ref",
                        ref: "wave-function",
                        value: "wave functions"
                    },
                    {
                        type: "text",
                        value: ", the solutions of which can be used to describe a quantum system and how it evolves in time. There exists no real general way of solving the Schrödinger equation for any system, and relatively few systems have exactly solvable Schrödinger equations."
                    }
                ]
            }
        ],
        topic: {
            title: "Wave equations",
            entries: [
                {
                    type: "ref",
                    value: "maxwells-equations",
                    label: "Maxwell's equations"
                },
                {
                    type: "ref",
                    value: "schrodinger-equation",
                    label: "Schrödinger equation"
                },
                {
                    type: "ref",
                    value: "dirac-equation",
                    label: "Dirac equation"
                },
                {
                    type: "ref",
                    value: "pauli-equation",
                    label: "Pauli equation"
                },
                
                {
                    type: "ref",
                    value: "klein-gordon-equation",
                    label: "Klein-Gordon equation"
                }
            ]
        }
    },
    {
        title: "Schrödinger equation",
        red: "schrodinger-equation",
        content: [

        ],

    }
];

export default categories;