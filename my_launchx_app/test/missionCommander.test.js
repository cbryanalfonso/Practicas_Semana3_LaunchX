const MissionCommander = require('./../app/missionComander');
/* 
describe("Esto es una suite de pruebas", () => {
    test('Caso de prueba 1', () => {
      const result = 1 + 2 
      expect(result).toBe(3);
    });
  }) */

  describe("Unit Test for Mission Commander Class ", () =>{
      test('1 create a mission commander object ', ()=>{
        const myMissionCommander = new MissionCommander("Woopa")
        expect(myMissionCommander.name).toBe("Woopa");
      }); 
  })