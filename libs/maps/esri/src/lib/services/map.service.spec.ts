import { async, inject, TestBed } from '@angular/core/testing';

import { EsriMapService } from './map.service';
import { EsriMapModule } from '@tamu-gisc/maps/esri';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchModule } from '@tamu-gisc/search';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { env, EnvironmentModule } from '@tamu-gisc/common/ngx/environment';

describe('EsriMapService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        EsriMapService,
        {
          provide: env,
          useValue: { SearchSources: [] }
        }
      ],
      imports: [EsriMapModule, RouterTestingModule, SearchModule, HttpClientTestingModule, EnvironmentModule]
    }).compileComponents();
  }));

  it('should be created', inject([EsriMapService], (esriMapService: EsriMapService) => {
    expect(esriMapService).toBeTruthy();
  }));
});
