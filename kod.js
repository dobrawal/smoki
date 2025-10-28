function funkcja(nazwa)
{

   if(nazwa == 'baza')
   {
        document.getElementById('baza').style.backgroundColor="mistyrose";
        document.getElementById('gora').style.display="block";
        document.getElementById('opisy').style.backgroundColor="#FFAEA5";
        document.getElementById('srodek').style.display="none";
        document.getElementById('galeria').style.backgroundColor="#FFAEA5";
        document.getElementById('dol').style.display="none";
   }
   else if(nazwa=='opisy')
   {
        document.getElementById('opisy').style.backgroundColor="mistyrose";
        document.getElementById('srodek').style.display="block";
        document.getElementById('baza').style.backgroundColor="#FFAEA5";
        document.getElementById('gora').style.display="none";
        document.getElementById('galeria').style.backgroundColor="#FFAEA5";
        document.getElementById('dol').style.display="none";
   }
   else if(nazwa=='galeria')
   {
        document.getElementById('galeria').style.backgroundColor="mistyrose";
        document.getElementById('dol').style.display="block";
        document.getElementById('opisy').style.backgroundColor="#FFAEA5";
        document.getElementById('srodek').style.display="none";
        document.getElementById('baza').style.backgroundColor="#FFAEA5";
        document.getElementById('gora').style.display="none";
   }
}