import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Typography from '@mui/material/Typography';

function About() {
    return (
        <>
            <Header></Header>
            <Typography
                variant='h4'
                color='textPrimary'
                align='center'
                margin='100px 0px 50px 0px'
            >
                About Us
            </Typography>


            <div>
                <Typography
                    color='textSecondary'
                    align='center'
                    gutterBottom='true'
                    sx={{
                        margin: 12,
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        textDecoration: 'none'
                    }}
                    
                >
                    <img src='client\public\logo512.png' />

                    Lorem ipsum dolor sit amet, mea in facer debet dolor, illud elitr imperdiet ne vim. Graece alterum at mei. Duo in case corpora argumentum. Libris luptatum per ad.

                    Duo no stet option, ea quas quaeque principes eos. Vidit minim id sea, graeci iriure iuvaret ei mei. Sed et ignota sanctus ocurreret, vis homero pertinacia te. Ei usu latine facilis. Dicit sententiae vel ut, nobis alienum voluptaria ei sit, quot case autem cu pro. Has cu porro errem, ea duo modo volutpat. Ancillae imperdiet conceptam mel id, per semper adipiscing id.

                    Dolor labore scripserit te his. Habeo sonet gloriatur no has, per stet dolores et, ne quo paulo vivendum euripidis. Singulis evertitur est no. Ne facer consul temporibus nam. Aperiam habemus deseruisse at qui.

                    Sea ea dolorem temporibus. Numquam feugiat placerat vel no, vitae commodo theophrastus mei ex. At elitr tollit tibique ius. Est oratio graecis invidunt ad. Cu sea sumo nominati temporibus, eum saepe omittantur in. Vim commodo petentium quaerendum id.

                    No pro luptatum vituperata scribentur. At vitae assentior usu. Vix eu meis ornatus maiestatis. Ius in minim dolor mnesarchum.

                    Lorem ipsum dolor sit amet, vis ceteros voluptua id. Purto cotidieque te sed. Ius ea iusto omnes quaerendum, sed viderer vituperatoribus te, sensibus accusamus persequeris mel no. Solet tantas eum eu, vero molestie te mea. Sea habeo populo scripserit in, mel cu blandit deseruisse. Pro ad legimus suscipiantur, posse tamquam eos ex.
                </Typography>
            </div>

            <Footer></Footer>
        </>
    )
}

export default About;