import { Component, OnInit } from '@angular/core';

interface Itarefa {
  desc: string;
  responsavel: {
    nome: string;
  };
}

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.css'],
})
export class OperadorElvisComponent implements OnInit {
  tarefa: Itarefa = {
    desc: 'Descrição da tarefa',
    responsavel: {
      nome: 'João',
    },
  };
  constructor() {}

  ngOnInit(): void {}
}
