import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService, HttpHealthIndicator, MemoryHealthIndicator } from '@nestjs/terminus';

@Controller()
export class HealthController {
    constructor(
        private readonly health: HealthCheckService,
        private readonly memory: MemoryHealthIndicator,
        private readonly http: HttpHealthIndicator
    ) {}

    @Get("health")
    checkHealth() {
        return "OK";
    }

    @Get("status")
    @HealthCheck()
    checkStatus() {
        return this.health.check([
            () => this.memory.checkHeap("memory_heap", 300 * 1024 * 1024),
            () => this.http.pingCheck("other-api", "http://localhost:3001")
        ]);
    }
}
