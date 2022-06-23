import {PDFDocument,StandardFonts,rgb} from 'pdf-lib'
import {charPage} from './CharPage'
import {React,useEffect} from 'react'
import {Row} from 'react-bootstrap'

const formattedInt = (int)=>{
  return (int<=0?"":"+") + int
}

const evalBonus = (level,bonusType)=>{
switch(bonusType)
{
  case("FL"):
    return (1*level)
  case("TH"):
    return Math.floor(2/3*level)
  case("HF"):
    return Math.floor(1/2*level)
  case("OT"):
    return Math.floor(1/3*level)
  default:
    return 0
}
}



function FinishingPage({attributes,pclass,race,feat,skills}) {

  async function createPdf(source) {
    const pdfDoc = await PDFDocument.load(source);
    const form = pdfDoc.getForm()

    attributes.forEach(element => {
      form.getTextField("Ability Score "+element.name).setText(element.base.toString())
      form.getTextField("Ability Modifier "+element.name).setText(formattedInt(element.bonus))
    });

    const bab = evalBonus(1,pclass.bab)
    {
      form.getTextField("Character Level").setText(pclass.name+" 1")
      
      form.getTextField("Total Hp").setText((Math.max(pclass.hitDice + attributes[2].bonus,1)).toString())
      
      form.getTextField("Total Fortitude Save").setText(formattedInt(evalBonus(1,pclass.saves[0])+(pclass.saves[0]==="TH"?2:0)+attributes[2].bonus))
      form.getTextField("Base Save Fortitude").setText((evalBonus(1,pclass.saves[0])+(pclass.saves[0]==="HF"?2:0)).toString())

      form.getTextField("Total Reflex Save").setText(formattedInt(evalBonus(1,pclass.saves[1])+(pclass.saves[1]==="TH"?2:0)+attributes[1].bonus))
      form.getTextField("Base Save Reflex").setText((evalBonus(1,pclass.saves[1])+(pclass.saves[1]==="HF"?2:0)).toString())

      form.getTextField("Total Will Save").setText(formattedInt(evalBonus(1,pclass.saves[2])+(pclass.saves[2]==="TH"?2:0)+attributes[4].bonus))
      form.getTextField("Base Save Will").setText((evalBonus(1,pclass.saves[2])+(pclass.saves[2]==="HF"?2:0)).toString())

      form.getTextField("Base Attack Bonus").setText(formattedInt(bab))

      form.getTextField("Gold").setText((pclass.wealthDiceCount*35).toString())
    }
    {
      form.getTextField("Total CMB").setText(formattedInt(bab+attributes[0].bonus))
      form.getTextField("Total CMD").setText((10+bab+attributes[0].bonus+attributes[1].bonus).toString())
      form.getTextField("Total Initiative Modifier").setText(formattedInt(attributes[1].bonus))
      form.getTextField("Total Armor Class").setText((10+attributes[1].bonus).toString())
      form.getTextField("Touch Armor Class").setText((10+attributes[1].bonus).toString())
      form.getTextField("Flat-Footed Armor Class").setText("10")
    }

    {
      form.getTextField("Race").setText(race.name)
      form.getTextField("Base Speed").setText(race.baseFeatures.find(element => element.name =="Base Speed").description)
      form.getTextField("With Armor").setText(race.baseFeatures.find(element => element.name =="Base Speed").description)
    }

    skills.forEach(element =>{
      if (element.class)
        form.getCheckBox(element.name + " Check").check()
      form.getTextField("R "+element.name).setText(element.ranks.toString())
      form.getTextField(element.name).setText((parseInt(element.ranks)+((element.class&(element.ranks>0))?3:0)+parseInt(attributes.find(el=> el.name === element.attribute).bonus)).toString())
    })

    {
      let count = 1
      race.baseFeatures.length>5 && race.baseFeatures.slice(5).forEach(element=>{
        form.getTextField("Special Abilities " + count.toString()).setText(element.name+"(Racial)")
        count= count+1
      })
      pclass.special.length>0 && Object.entries(pclass.special[0]).forEach(element => {
        form.getTextField("Special Abilities " + count.toString()).setText(element[0]+"(Class Feature)") 
        count= count+1
      })
      
    }

    {
      form.getTextField("Feat 1").setText(feat.name)
    }

    const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    document.getElementById('pdf').src = pdfDataUri;
  }

  useEffect(() => {
        createPdf(charPage);
      }, []);

  return (
    <Row className="flex-grow-1 overflow-auto">
        <iframe id="pdf" style={{width:"100%", height:"100%"}}></iframe>
    </Row>
  )
}

export default FinishingPage