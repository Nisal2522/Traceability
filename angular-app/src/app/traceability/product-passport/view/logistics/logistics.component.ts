import { Component } from '@angular/core'
import { TraceabilityDataService } from '../../../../core/service/traceability/traceability-data.service'
import { StopDetailDTO } from '../../../../core/models/StopDetailDTO'

@Component({
  selector: 'app-logistics',
  standalone: false,
  templateUrl: './logistics.component.html',
  styleUrl: './logistics.component.scss',
})
export class LogisticsComponent {
  rows: StopDetailDTO[]
  tempLog: string[]
  humidityLog: string[]

  constructor(private data: TraceabilityDataService) {
    this.rows = this.data.getLogisticsRows()
    this.tempLog = this.data.getTempLog()
    this.humidityLog = this.data.getHumidityLog()
  }
}
