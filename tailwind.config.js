/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'blue' : 'hsl(213, 96%, 18%)',
        'purpleblue' : 'hsl(243, 100%, 62%)',
        'pastelblue' : 'hsl(228, 100%, 84%)',
        'lightblue' : 'hsl(206, 94%, 87%)',
        'red' : ' hsl(354, 84%, 57%)',
        'coolgray' : 'hsl(231, 11%, 63%) ',
        'lightgray' : ' hsl(229, 24%, 87%) ',
        'magnolia' : 'hsl(217, 100%, 97%)',
        'alabaster' : 'hsl(231, 100%, 99%)',
        'white' : ' hsl(0, 0%, 100%)',
      },
      screens: {
        mobile: '375px', 
        desktop: '930px'
      }, 
      fontFamily : {
        ubuntu : ['Ubuntu', 'sans-serif'],
      },
      fontSize : {
        'head-mb': ['1.5rem', {
          lineHeight: '1.75rem',
          letterSpacing: '0px',
          fontWeight: '700',
        }],
        'body-mb': ['1rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0px',
          fontWeight: '400',
        }],
        'input-mb': ['0.9375rem', {
          lineHeight: '1.0625rem',
          letterSpacing: '0px',
          fontWeight: '500',
        }],
        'btn-mb': ['0.875rem', {
          lineHeight: '1rem',
          letterSpacing: '0px',
          fontWeight: '500',
        }],
        'subhead-mb': ['0.75rem', {
          lineHeight: '0.875rem',
          letterSpacing: '0px',
          fontWeight: '400',
        }],
        'head' : ['2rem', {
          lineHeight : '2.3125rem',
          letterSpacing: '0px',
          fontWeight: '700'
        }],
        'body' : ['1rem', {
          lineHeight : '1.5px',
          letterSpacing: '0px',
          fontWeight: '400'
        }],
        'btn' : ['1rem', {
          lineHeight : '1.125rem',
          letterSpacing: '0px',
          fontWeight: '500'
        }],
        'subhead' : ['0.875rem', {
          lineHeight : '1rem',
          letterSpacing: '0px',
          fontWeight: '400'
        }],
     },
     fontWeight : {
      bold: '700',
      light: '400',
      med: '500'
     },
     borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    }
    },
  },
  plugins: [],
}

